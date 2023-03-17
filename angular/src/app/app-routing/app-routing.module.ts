import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../authentication/login/login.component'; 
import { CadastrosComponent } from '../cadastros/cadastros.component'; 
import { HeaderComponent } from '../layout/header/header.component';
import { LayoutComponent } from '../layout/layout.component';

import { ChatComponent } from '../cadastros/chat/chat.component';    
import { MuralComponent } from '../layout/mural/mural.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhisperComponent } from '../cadastros/whisper/whisper.component';

const routes: Routes = [

  // { path: '', redirectTo: 'mural', pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [ 
      { path: 'layout',     component: LayoutComponent },
      { path: 'mural',     component: MuralComponent },
      { path: 'app',        component: AppComponent }, 
      { path: 'header',           component: HeaderComponent },
      { path: 'login',            component: LoginComponent },

      { path: 'cadastros',        component: CadastrosComponent }, 
      { path: 'chat',             component: ChatComponent },   
      { path: 'whisper',         component: WhisperComponent },  
    ]
  }
]
 

@NgModule({

  declarations: [

  ],
  imports: [

    [RouterModule.forRoot(routes)], 

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  exports:   [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
