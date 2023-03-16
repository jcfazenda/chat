import { Injectable } from '@angular/core'; 
import { map, catchError } from 'rxjs/operators'; 
import { Observable, Subject } from 'rxjs'; 
import { ConnectionService } from './connection.service'; 


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Usuario: any;  
  ListTela:       any[]; 
  ListTelaFuncao: any[]; 

  constructor(private apiService: ConnectionService) { 

      this.Usuario = JSON.parse(localStorage.getItem('currentUser'));

  }
  
  Send(model: any): Observable<any> { 
 
    return this.apiService.post_api(model.Rota, model).pipe(map((res: any) => { 
      return res;
    }),
    catchError(error => { 
        return error;
      })
    ); 
  }
  SendClient(model: any): Observable<any> { 

    return this.apiService.post_client(model.Rota, model).pipe(map((res: any) => { 
      return res;
    }),
    catchError(error => { 
        return error;
      })
    ); 
  }

  GetGenerics(model: any): Observable<any> { 

    return this.apiService.post_api('Generics/GetList', model).pipe(map((res: any) => { 
      return res;
    }),
    catchError(error => { 
        return error;
      })
    ); 
  }
 
  /* HUB Message */
  SendMessage(model: any): Observable<any>   {  

      return this.apiService.post_api(model.Rota, model).pipe(map((res: any) => { 
        return res;
      }),
      catchError(error => { 
          return error;
        })
      ); 

  }

  /* Tenant */
  SendTenat(cliente_Database: string, model: any): Observable<any> { 

    return this.apiService.post_api_tenant(cliente_Database, model.Rota, model).pipe(map((res: any) => { 
      return res;
    }),
    catchError(error => { 
        return error;
      })
    ); 
  }
 

}
