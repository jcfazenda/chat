import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { MatDialogRef } from '@angular/material/dialog'; 
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { TextMaskModule } from 'angular2-text-mask';
 
import { PerfilAcessoComponent } from './perfil-acesso/perfil-acesso.component'; 
import { LoginComponent } from './login/login.component';
import { TelasComponent } from './perfil-acesso/telas/telas.component';
import { LoginRecoverComponent } from './login-recover/login-recover.component';

import {NgxPaginationModule} from 'ngx-pagination';

    /* Translate */ 
	import { HttpClientModule, HttpClient } from '@angular/common/http';
	import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
	import {TranslateHttpLoader} from '@ngx-translate/http-loader';

	export function HttploaderFactory (http: HttpClient) {
		return new TranslateHttpLoader(http);
	}

const routes: Routes = [
    {
        path     : '**',
        component: TelasComponent
         
    }
];

 
@NgModule({
    declarations: [
        TelasComponent, PerfilAcessoComponent, LoginRecoverComponent,
    ],
    imports     : [

        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide:    TranslateLoader,
            useFactory: HttploaderFactory,
            deps:       [HttpClient]
          }
        }),
        
  
        RouterModule.forChild(routes),    
        CommonModule,
        FormsModule,ReactiveFormsModule,
        BrowserModule,
        MatInputModule,
        MatFormFieldModule, 
        HttpClientModule,
        MatRadioModule,  
        AngularEditorModule,   
        TextMaskModule, 
        NgxPaginationModule 

    ],
    providers   : [ 
        { provide:  MatDialogRef } , 
    ],
    entryComponents: [],
    exports: [],
    bootstrap: []

})
export class AuthenticationModule
{
}