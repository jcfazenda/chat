import { Injectable } from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class StorageService { 

  constructor( ) { 
  }
   
  setUser(user: any): void {

    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
    localStorage.setItem('idUsuario', user.id_Usuario.toString());

    localStorage.setItem('email',  user.usuario_Email.toString());
    localStorage.setItem('nome',   user.usuario_Nome.toString() + ' ' + user.usuario_Sobrenome.toString());
    localStorage.setItem('avatar', user.usuario_Avatar === null ? '' : user.usuario_Avatar.toString());  
  }  
 
  setDataBase(token): void {
    localStorage.setItem('accessDatabase', token);
  } 
  setCliente(item): void {     
    const item_string = JSON.stringify(item);
    localStorage.setItem('accessCliente',item_string);
  }
  setForms(item): void {     
    const item_string = JSON.stringify(item);
    localStorage.setItem('accessForms',item_string);
  }
  setEntrance(item): void {     
    const item_string = JSON.stringify(item);
    localStorage.setItem('accessEntrances',item_string);
  }

  logoutUser(): any {
 
    localStorage.removeItem('accessDatabase');
    localStorage.removeItem('currentUser');  
    
  } 
  SetCurrent(item: any): any {
 
    localStorage.setItem('current', item);
    
  } 
  SetEncriptSms(item: any): any {
 
    localStorage.setItem('codsms', item);
    
  }  
  SetTranslate(item: any): any {
 
    localStorage.setItem('translate', item);
    
  } 

  SetDataBase(item): any {
 
    const item_string = JSON.stringify(item);
    localStorage.setItem('database',item_string);
    
  }
  SetAmbienteAPI(api, client): any {
 
    const item_string_api            = JSON.stringify(api);
    const item_string_cliente        = JSON.stringify(client); 

    localStorage.setItem('database_ambiente_api',       item_string_api);
    localStorage.setItem('database_ambiente_api_client',item_string_cliente);
    localStorage.setItem('database_ambiente_api_hub',   item_string_api); 
    
  }
  SetDataBaseAmbiente(ambiente): any {
  
    const item_string_list_ambiente  = JSON.stringify(ambiente);
 
    localStorage.setItem('database_ambiente',          item_string_list_ambiente);
    
  }

}
