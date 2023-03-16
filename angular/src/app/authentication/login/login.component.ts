import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { identity } from 'rxjs';  
import { StorageService } from './../../api/services/storage.service'; 
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../authentication.component.css']
})
export class LoginComponent implements OnInit {


  Message = '';
  Email = '';
  idUsuario: 0;
  isValid = false;
  form:   FormGroup; 

  Current: any ;  
  Usuario: any;
  _usuarioContato:   any;
  _usuario: any;


  public mascaraTelefone  = [/\d/, ' ',  /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mascaraDDD       = [/\d/, /\d/];
  
  constructor(private storageService: StorageService, 
             private apiService: ApiService,
             private router: Router,
             private _formBuilder: FormBuilder, ) { 
                
    this.Current = localStorage.getItem('current'); 
    this.Usuario = JSON.parse(localStorage.getItem('currentUser'));

    this.form = this.ComponentForm();  
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

        cliente_Codigo_Indicacao:    ['', Validators.required],
        cliente_Nome:    ['', Validators.required],
    });

  } 

}
