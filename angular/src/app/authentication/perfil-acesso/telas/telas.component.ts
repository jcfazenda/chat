import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { NivelAcessoInput, TelaFuncaoInput, TelaInput } from '../../../api/services/models/perfil-acesso-input';
import { GenericsService } from '../../../api/services/generics.service';
import { InputService } from '../../../api/services/models/input.service'; 
import { ApiService } from '../../../api/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./../perfil-acesso.component.css']
})
export class TelasComponent implements OnInit {
  
  PagePosition = 0;
  PagePupUpPosition = 0;

  Type = '';
  State = 'View';
  TypeGrid = '';
  Action = 'Find';
  form: FormGroup;
  EditConfig: any; 
  ButtoFunctions = true;

  ListNivelAcessoTelaFuncao: any;

  ListTela: any[]; 
  ListTelaFuncao: any[]; 
  ListNivelAcesso: any[];  

  boolStatus = true;
  Status: []; 
  TelaCategoria: [];
  _input: any;
  _funcao: any; 
  _nivel: any;
  _perfilAcessoService: any;
  _templateEmail: any;

    /* Perfis de Acesso */ 
    FuncoesConfig: any;
    UsuarioLogado: any;  
    /* Perfis de Acesso */

    constructor(private apiService: ApiService, 
                private _formBuilder: FormBuilder,
                private genericsService: GenericsService,
                private input: InputService, public translate : TranslateService) { 
 
      this.UsuarioLogado = JSON.parse(localStorage.getItem('currentUser'));   
      translate.use(localStorage.getItem('translate') === null ? 'pt' : localStorage.getItem('translate'));  

      this.Status           = genericsService.ActiveInactive();  
      this.TelaCategoria    = genericsService.TelaCategoria();  
      this.EditConfig       = genericsService.ConfigEdit();

      this._input           = input.Tela; 
      this.form             = this.ComponentForm();  
                  
   }

  ngOnInit(): void {   
  }
  ComponentForm(): FormGroup {

    return this._formBuilder.group({

      tela_Nome:            ['', Validators.required], 
      tela_Url:             ['', Validators.required], 
      tela_Funcao_Nome:     ['', Validators.required],
      tela_Funcao_Codigo:   ['', Validators.required], 
      nivel_Acesso_Nome:    ['', Validators.required], 

      texto: ['', Validators.required],
      texto_label: ['', Validators.required],
      evento: ['', Validators.required],

    });

  }  
} 