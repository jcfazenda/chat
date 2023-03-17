
import { ElementRef, NgModule } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatInputModule} from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';

import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './authentication/login/login.component'; 
import { MuralComponent } from './layout/mural/mural.component';

import {MatBadgeModule} from '@angular/material/badge'; 
import { ConnectionService } from './api/connection.service';

 /* Translate */
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'; 
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { NgIdleModule } from "@ng-idle/core";
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { TextMaskModule } from 'angular2-text-mask';
import { ChatComponent } from './cadastros/chat/chat.component'; 
import { WhisperComponent } from './cadastros/whisper/whisper.component';

export function HttploaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,  
    MuralComponent,
    ChatComponent,
    WhisperComponent
  ],
  imports: [ 
    
    /* Translate */
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide:    TranslateLoader,
        useFactory: HttploaderFactory,
        deps:       [HttpClient]
      }
    }),

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule, 
    CommonModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,

    [SimpleNotificationsModule.forRoot()],
    AppRoutingModule,
    MatBadgeModule,
    NgxPaginationModule, 
 
    AngularEditorModule,   
    TextMaskModule,    

    NgIdleModule.forRoot()
  ],
  providers: [ConnectionService, { provide: APP_BASE_HREF, useValue: '' } ],
  exports:   [],
  bootstrap: [AppComponent]
})
export class AppModule { }
