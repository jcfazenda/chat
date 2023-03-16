import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { GenericsService } from '../../api/services/generics.service'; 
import { StorageService } from '../../api/services/storage.service';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr'; 
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
const WAIT_UNTIL_ASPNETCORE_IS_READY_DELAY_IN_MS = 2000;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./../layout.component.css']
})
export class SidebarComponent implements OnInit {
 
  OrdemSidebar = false;
  _input:   any;
  Hub:      any; 
  connectionEstablished = new Subject<Boolean>();
  private hubConnection: HubConnection;
 
  Usuario:      any; 

  constructor(private storageService: StorageService,
              private router: Router,private genericsService: GenericsService,
              private apiService: ApiService,
              public translate : TranslateService) {
 
      /* Translate */
      translate.addLangs(['en-US', 'fr', 'pt']); 
      const browserLang = translate.getBrowserCultureLang();
      translate.use(localStorage.getItem('translate') === null ? 'pt' : localStorage.getItem('translate'));   

      this.Usuario      = JSON.parse(localStorage.getItem('currentUser'));    
      this.Hub          = genericsService.HTTPConnection().api.filter(x =>    x.active   === true)[0];  
  

      if (this._input === null) { 
         
          this.storageService.SetCurrent('login'); 
          this.storageService.logoutUser();
          window.location.reload();
       } 
  }

  ngOnInit(): void { 

    this.createConnection(); 

  }
 

  switchLang(lang: string) {
    this.translate.use(lang);
    this.storageService.SetTranslate(lang);  
  }

  Goto(item: string) {
      this.storageService.SetCurrent(item);
      window.location.reload(); 
      this.router.navigate(['/app']);      
  }

 
  createConnection(): any {

    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.Hub.url + 'SignalR',
        {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets
        })
      .build();

    this.startConnection();
    this.registerOnServerEvents(this.Usuario.id_Usuario);

  }
  startConnection(): any {

    setTimeout(() => {

        this.hubConnection.start().then(() => {
        this.connectionEstablished.next(true);

      });
    }, WAIT_UNTIL_ASPNETCORE_IS_READY_DELAY_IN_MS);

  }
  registerOnServerEvents(id: number): void {

    /* verificar Chegou Mensagem pelo Hub SignalR */   
    this.hubConnection.on('SendMessage', (data) => {   
    });
  }  


}
