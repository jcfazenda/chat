import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api/api.service';
import { GenericsService } from './api/services/generics.service';

import { StorageService } from './api/services/storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  SendMail = false;
  Message     = '';
  Email       = '';
  idUsuario: 0;
  isValid     = false;
  form:       FormGroup;

  LoaddingMessage = '';
  Current: any ;
  Usuario: any;
  _usuarioContato:   any;
  _usuario: any;
  ListUsuarioCliente: any[]; 

  public mascaraTelefone  = [/\d/, ' ',  /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mascaraDDD       = [/\d/, /\d/];

  Api:    any;
  Client: any;
  Hub:    any; 


  value: number;

  constructor(private storageService: StorageService,
             private apiService: ApiService,
             private router: Router,
             private _formBuilder: FormBuilder,
             private genericsService: GenericsService ) {

    this.Current = localStorage.getItem('current');
    this.Usuario = JSON.parse(localStorage.getItem('currentUser'));
    this.form    = this.ComponentForm(); 
   
  }


  ngOnInit(): void {
 
 

  }
  ComponentForm(): FormGroup {

    return this._formBuilder.group({

        usuario_Nome:                  ['', Validators.required],
        usuario_Sobrenome:             ['', Validators.required],
        usuario_Email:                 ['', [Validators.required, Validators.email]],
        usuario_Senha:                 ['', Validators.required],
        usuario_Senha_Confirm:         ['', Validators.required],

        usuario_Email_recover:         ['', Validators.required],
        usuario_Senha_recover:         ['', Validators.required],
        usuario_Senha_confirm_recover: ['', Validators.required],
        usuario_Codigo_Senha:          ['', Validators.required],

        usuarioContato_Ddr:            ['', Validators.required],
        usuarioContato_Ddd:            ['', Validators.required],
        usuarioContato_Telefone:       ['', Validators.required],

        cliente_Codigo_Indicacao:     ['', Validators.required],
        cliente_Nome:                 ['', Validators.required],

        contato_nome:       ['', Validators.required],
        contato_email:      ['', Validators.required],
        contato_mensagem:   ['', Validators.required],

        select_usuario_cliente:   ['', Validators.required],
    });

  }



  Conectar(): any {

    this.storageService.logoutUser(); 
    this.storageService.SetDataBase(null);
    this.storageService.logoutUser();
    this.storageService.setCliente({cliente_Database: 'client'});

    this.Email = this.form.value.usuario_Email;

    let _send = {
      Rota: 'Usuarios/Connected',
      usuario_Email: this.form.value.usuario_Email,
      usuario_Senha: this.form.value.usuario_Senha
    }  

    return this.apiService.SendClient(_send).subscribe(data => {  

      if (data.success === true) {
        
           data.data.usuario_Senha = '';
           
           this._usuario = data.data;
           this.Current  = 'chat';
           
           data.data.id_Usuario_Tenant = data.data.id_Usuario;
           data.data.id_Nivel_Acesso   = 1;
            
           this.storageService.SetCurrent('chat');
           this.storageService.setUser(data.data); 

           this.router.navigate(['/chat']); 
      }

    }, error => { });

  }

  Deslogar(){
    this.storageService.logoutUser();
    window.location.reload();
  }

}
