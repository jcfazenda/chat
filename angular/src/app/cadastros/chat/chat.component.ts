import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ApiService } from '../../api/api.service';
import { GenericsService } from '../../api/services/generics.service'; 
import { InputService } from '../../api/services/models/input.service'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./../cadastros.component.css'], 
})
export class ChatComponent implements OnInit {
 
  form:       FormGroup;  
  Usuario:    any;
  EditConfig: any; 
  ListBot:     any[];
  ListMessage: any[];

  _input:  any;   
  _talk = {
      id_Bot:           0, 
      id_Status:        0,
      bot_Nome:         '',
      bot_NomeResumido: '',
      bot_Descricao:    '',
      fl_Ativo:         true,
      active:           'active',
      botStatus:        null
  }
  

  constructor(private router: Router, 
              private apiService: ApiService, 
              private genericsService: GenericsService, 
              private input: InputService,
              private _formBuilder: FormBuilder, 
              public translate : TranslateService ) { 
 
      this.Usuario    = JSON.parse(localStorage.getItem('currentUser'));
      this.form       = this.ComponentForm(); 
      this.EditConfig = this.genericsService.ConfigEdit();
      this._input     = this.input.Chat;

      this._input.message_Gpt     = '';
      this._input.message_Usuario = '';

      this.ListBot            = [];
      this.ListMessage        = [];

  }    

    ngOnInit(): void { 
      this.GetAny()
    }
    ComponentForm(): FormGroup {

      return this._formBuilder.group({

          message_Gpt:   ['', Validators.required],
          message_Usuario:    ['', Validators.required],

      });

    }
  
    /* BOT */
    Talk(item: any): any {

      this.ListMessage = [];
      this._talk       = item;

      this.ListBot.forEach((nos) => {             
          if (nos.id_Bot !== item.id_Bot) { nos.active = ''; }
          if (nos.id_Bot === item.id_Bot) { nos.active = 'active'; }
      });      

      /* busca as mensagens */
      let _send = {
        Rota: 'Chat/GetMessage',
        Mensagem:   this.form.value.message_Usuario,
        id_Bot:     this._talk.id_Bot,
        id_Usuario: this.Usuario.id_Usuario
      } 

      return this.apiService.SendClient(_send).subscribe(data => {  
 
        this.ListMessage = data.data;    

      }, error => { });

    }
    GetAny(): any {
       
      let _send = {
        Rota: 'Bot/GetAny', 
        fl_Ativo: true
      } 

      return this.apiService.SendClient(_send).subscribe(data => {  
 
        this.ListBot = [];
        let active   = true;

        data.data.forEach((nos) => {    
          
            const _item = {
                id_Bot:           nos.id_Bot,
                id_Status:        nos.id_Status,
                bot_Nome:         nos.bot_Nome,
                bot_NomeResumido: nos.bot_Nome.substring(0,16) + '...',
                bot_Descricao:    nos.bot_Descricao,
                fl_Ativo:         nos.fl_Ativo,
                active:           active === true ? 'active' : '',

                botStatus:        nos.botStatus
            }

            if(active === true) { this._talk = _item}
            active = false;

            this.ListBot.push(_item); 
        });  

      }, error => { });

    }

    /* CHAT */
    Send(): any { 

      if (this.form.value.message_Usuario !== '') {

        const item = {
          data_Hora:  '',
          fl_Ativo:   true, 
          fl_Bot:     false,
          id_Bot:     this._talk.id_Bot,
          id_Chat:    0,
          id_Usuario: this.Usuario.id_Usuario,
          mensagem:   this.form.value.message_Usuario
        }

        this.ListMessage.push(item);

          let _send = {
            Rota:       'Chat/SendMessageAsync',
            Mensagem:   this.form.value.message_Usuario,
            id_Bot:     this._talk.id_Bot,
            id_Usuario: this.Usuario.id_Usuario
          } 

          //this.form.value.message_Usuario = '';

          return this.apiService.SendClient(_send).subscribe(data => {  

            console.log(data.data);
            this.ListMessage = data.data;   
            this.form.value.message_Usuario = '';
          
          }, error => { });

      }


    }


}
