import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../api/services/storage.service';
import { ApiService } from '../../api/api.service'; 
import { ConnectionService } from '../../api/connection.service';
import { GenericsService } from '../../api/services/generics.service';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';  
import { Subject } from 'rxjs';

import { Idle, DEFAULT_INTERRUPTSOURCES } from "@ng-idle/core";

const WAIT_UNTIL_ASPNETCORE_IS_READY_DELAY_IN_MS = 2000;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../app.component.css']
})
export class HeaderComponent implements OnInit {

    CodeApi = 0;
    Hub:    any; 

    QtdMessageMail  = '';
    QtdMessageAlert = '';
    ListCarrieMessageMail: any[];
    ListCarrieMessageAlert: any[];
    Usuario: any; 
    Bandeira: any;
    
    GetMessage = false;
    connectionEstablished = new Subject<Boolean>();
    private hubConnection: HubConnection;

    /* IDLE */ 
    idleState = "Not started.";
    timedOut = false;

    constructor(private storageService: StorageService,
                private router: Router,
                private message: ConnectionService,
                private genericsService: GenericsService,
                private apiService: ApiService,
                private idle: Idle) { 

      if (JSON.parse(localStorage.getItem('currentUser'))   !== null) {

        this.Usuario         = JSON.parse(localStorage.getItem('currentUser')); 
        this.Hub             = genericsService.HTTPConnection().api.filter(x =>    x.active   === true)[0];    
        this.Bandeira        = localStorage.getItem('translate');  
        this.Usuario.cliente = JSON.parse(localStorage.getItem('accessCliente'));

        this.createConnection(); 
      }
  
      /* idle */
      /* quanto tempo eles podem ficar inativos antes de serem considerados inativos, em segundos */  
      idle.setIdle(900);  
      idle.setTimeout(20);  
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

      this.idle.onIdleEnd.subscribe(() => (this.idleState = "")); /* não está mais ocioso. */

      this.idle.onTimeout.subscribe(() => {
        this.idleState = "você foi deslogado!";
        this.timedOut = true; 
        this.Goto('login')
      });

      this.idle.onIdleStart.subscribe( () => (this.idleState = "você ficou ocioso!"),  );
      this.idle.onTimeoutWarning.subscribe( countdown => (this.idleState = "você vai expirar em " + countdown + " segundos!") ); 

      this.reset();

    }

    reset() {
      this.idle.watch();
      this.idleState = ""; /* trabalhando. */
      this.timedOut = false;  
    }

    Sound() {

      let context = new AudioContext(),
          oscillator = context.createOscillator();

        oscillator.type = 'sine';
        oscillator.connect(context.destination);
        oscillator.start();        
    }
 
    ngOnInit(): void {  
        
        this.reset(); /* IDLE */

    }

    Goto(item: string) {

      this.storageService.SetCurrent(item);
      window.location.reload();
      this.router.navigate(['/app']);

    } 
 
 
  /* HUB */
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
 
    this.hubConnection.on('SendMessage', (data) => { 

      /* verificar Chegou Mensagem pelo Hub SignalR */
      if (this.GetMessage === false) { this.GetMessage = true; } 

      this.Bandeira        = localStorage.getItem('translate'); 

      if (data.type === 'dasboard') { }
      if (data.type === 'alert') { } 

    });
  }


}
