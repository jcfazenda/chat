import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { GenericsService } from '../../api/services/generics.service';
import { InputService } from '../../api/services/models/input.service'; 

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./../layout.component.css']
})
export class MuralComponent implements OnInit {

  form:       FormGroup;
  EditConfig: any; 

  _input:  any;  
  
  LinksMural = [
    {id: 1, rota: '/empresa',         img: 'icoEmpresas',   titulo: 'Empresas',             rodape: 'Empresas cadastradas'},
    {id: 2, rota: '/processo',        img: 'icoProcessos',  titulo: 'processos.name',       rodape: 'processos.rodape'}, 
  ];

  constructor(private router: Router,
              private _formBuilder: FormBuilder ) {

      this.form       = this.ComponentForm(); 

  }

  ngOnInit(): void {
  }
  ComponentForm(): FormGroup {

    return this._formBuilder.group({

        message_Gpt:   ['', Validators.required],
        message_Usuario:    ['', Validators.required],

    });

  }



}
