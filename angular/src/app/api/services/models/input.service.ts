import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class InputService {

    constructor() { } 

    ActiveInactive(): any {

        let item = [
            {
                isChecked: '',
                name: 'Inativo',
                value: 'option2',
                active: false
            },
            {
                isChecked: 'checked',
                name: 'Ativo',
                value: 'option1',
                active: true
            }

        ]

        return item;
    }

    /* Incidente */
    Chat(): any {

        return {
            id_Chat: 0,  
            id_Bot: 0,
            id_Usuario:         0,
            mensagem:        '',
            fl_Bot:    false,
            data_Hora:          null,
            dl_Ativo:           false,

            Rota: 'Chat/Create',
  
        }
    }


}
