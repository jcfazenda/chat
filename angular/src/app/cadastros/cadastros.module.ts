import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'; 
import { MatDialogRef } from '@angular/material/dialog'; 
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { MatFormFieldModule} from '@angular/material/form-field';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   

import { CadastrosComponent } from './cadastros.component';  
import { DecisionComponent } from './decision/decision.component';
import {NgxPaginationModule} from 'ngx-pagination';

/* Translate */ 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
 
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { TextMaskModule } from 'angular2-text-mask';
import ptBr from '@angular/common/locales/pt';    

export function HttploaderFactory (http: HttpClient) {
    return new TranslateHttpLoader(http);
}

registerLocaleData(ptBr);


const routes: Routes = [
    {
        path     : '**',
        component: CadastrosComponent
    }
];

 
@NgModule({
    declarations: [
        CadastrosComponent,  
        DecisionComponent, 
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
        FormsModule,
        ReactiveFormsModule,
        BrowserModule, 
        MatFormFieldModule, 
        HttpClientModule, 
        AngularEditorModule,   
        TextMaskModule,  
        NgxPaginationModule
    ],
    providers   : [ 
        { provide: MatDialogRef }, 
        
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: LOCALE_ID, useValue: 'pt-BR'},
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }, CurrencyPipe
    ],
    entryComponents: [],
    exports: [],
    bootstrap: []

})
export class CadastrosModule
{
}