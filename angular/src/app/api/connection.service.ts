
import { Injectable } from '@angular/core'; 
import { throwError, Subject, Observable } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';  
import { GenericsService } from '../api/services/generics.service';
import { StorageService } from './services/storage.service';

@Injectable()
export class ConnectionService {
 
    CodeApi = 0;
    Api:    any;
    Client: any;
    Hub:    any; 
      
    Usuario: any; 

    constructor(private http: HttpClient,
                private _notifications: NotificationsService,
                private genericsService: GenericsService, private storageService: StorageService,) {

        this.Usuario = JSON.parse(localStorage.getItem('currentUser'));

        /* 
           this.storageService.SetDataBaseAmbiente(null);
           this.storageService.SetAmbienteAPI(null, null); 
           this.storageService.setCliente(null);
        */


        /* AMBIENTE: HML - PROD - DEV */   
        if (JSON.parse(localStorage.getItem('database_ambiente')) === null) { this.storageService.SetDataBaseAmbiente(genericsService.HTTPConnection().api);}

        if (JSON.parse(localStorage.getItem('database_ambiente_api_client')) === null) { 

            this.storageService.SetAmbienteAPI(genericsService.HTTPConnection().api.filter(x =>    x.active   === true)[0], 
                                               genericsService.HTTPConnection().client.filter(x => x.active   === true)[0]); 

            this.Client  = genericsService.HTTPConnection().client.filter(x => x.active   === true)[0];  
            this.Api     = genericsService.HTTPConnection().api.filter(x =>    x.active   === true)[0]; 
            this.Hub     = genericsService.HTTPConnection().api.filter(x =>    x.active   === true)[0];                                               
        
        } else if (JSON.parse(localStorage.getItem('database_ambiente_api_client')) !== null) {

            this.Client = JSON.parse(localStorage.getItem('database_ambiente_api_client'));
            this.Api    = JSON.parse(localStorage.getItem('database_ambiente_api'));
            this.Hub    = JSON.parse(localStorage.getItem('database_ambiente_api_hub')); 
        }  

    
        
    }   

    /* API */
    post_api_tenant(cliente_Database: string ,path: string, body: Object = {}): Observable<any> { 

        let Rota = JSON.parse(localStorage.getItem('accessCliente'));
        if (Rota === null) {Rota = { cliente_Database:'grc_client'}; }   
 
        let rota    = this.Api.url + (cliente_Database  + '-' + this.Client.name) + '/api/';     

        return this.http.post(
            `${rota.trim()}${path}`, JSON.stringify(body),
            { headers: { 'Content-Type': 'application/json' } })
            .pipe(catchError(err => this.formatErrors(err, this._notifications)));
    }

    post_api(path: string, body: Object = {}): Observable<any> { 
 
        
        let Rota = JSON.parse(localStorage.getItem('accessCliente'));
        if (Rota === null) {Rota = { cliente_Database:'grc_client'}; }   
 
        let rota    = this.Api.url + (Rota.cliente_Database  + '-' + this.Client.name) + '/api/';    
  
        return this.http.post(
            `${rota.trim()}${path}`, JSON.stringify(body),
            { headers: { 'Content-Type': 'application/json' } })
            .pipe(catchError(err => this.formatErrors(err, this._notifications)));
    }

    post_client(path: string, body: Object = {}): Observable<any> {  
 
        let Rota = JSON.parse(localStorage.getItem('accessCliente'));
        if (Rota === null) {Rota = { cliente_Database:'grc_client'}; } 
    
        let rota    = this.Client.url + (Rota.cliente_Database  + '-' + this.Client.name) + '/api/';     

        return this.http.post(`${rota.trim()}${path}`, JSON.stringify(body),
            { headers: { 'Content-Type': 'application/json' } })

            .pipe(catchError(err => this.formatErrors(err, this._notifications)));
    }

    private formatErrors(error: any, _notifications: NotificationsService): any {
        this.showErrors(error, _notifications);
        return throwError(error.error);
    }

    private showErrors(error: any, _notifications: NotificationsService): any {

        let errorMsg = '';
        switch (error.status) {
            case 401:
                errorMsg = '401 - Unauthorized';
                break;
            case 403:
                errorMsg = '403 - Forbidden';
                break;
            case 504:
                errorMsg = '504 - Timeout';
                break;
            default:

                if (error.error && error.error.errors && error.error.errors.length > 0) {
                    error.error.errors.forEach(element => {
                        errorMsg += element + '; ';
                    });

                }
                break;
        }

        if (errorMsg) {
        }

    }

  
}
