import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {

  constructor() { } 

  HTTPConnection(): any {

    let HTTPConnection = {

      api: [
        { id: 1, name: 'naka',     icon: 'fa fa-globe',    label: 'naka',  type: 'api', active: false,     url: 'https://egrc-api-hmg-dot-risk-tools-hmg.rj.r.appspot.com/'} , /* produção */
        { id: 2, name: 'naka',     icon: 'fa fa-database', label: 'naka',  type: 'api', active: true,    url: 'https://localhost:5001/'},                                      /* homologacao em debug */ 
      ],
      
      client: [
        { id: 1, name: 'naka',      icon: '',               label: 'naka',    type: 'api', active: false,   url: 'https://grc_api_client.grcteam.com.br/'},         /* produção*/
        { id: 2, name: 'naka',      icon: 'fa fa-database', label: 'naka',    type: 'api', active: true,   url: 'https://localhost:5001/'},                         /* homologacao em debug *** */         
      ],
       
    };  

    return HTTPConnection; 

  } 
 
  GetFuncoesConfig() {
    
    let _item = []; 
        _item.push({name: 'item_btn_group',       visible:  false});
        _item.push({name: 'item_print',           visible:  false});
        _item.push({name: 'item_edit',            visible:  false});
        _item.push({name: 'item_create',          visible:  false});
        _item.push({name: 'item_delete',          visible:  false});
        _item.push({name: 'item_view_register',   visible:  false});
        _item.push({name: 'item_active_inactive', visible:  false});
        _item.push({name: 'item_associate_workflow', visible:  false});
        _item.push({name: 'item_search', visible:  false});   

        _item.push({name: 'item_cadastrar', visible:  true});   

        return _item;
  } 
  ConfigEditDisable(): any { 

    let config = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        customClasses: [
          {
            name: "quote",
            class: "quote",
          },
          {
            name: 'redText',
            class: 'redText'
          },
          {
            name: "titleText",
            class: "titleText",
            tag: "h1",
          },
        ]
      } 

    return config;
    
  }

  ConfigEdit(): any {

    let config = {
      placeholder: '',
      tabsize: 2,
      height: '300px',
      uploadImagePath: '',
      translate: 'yes',
      enableToolbar: true,
      editable: true,
      showToolbar: true,
      uploadUrl: 'v1/image',
      toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
      ],
      fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
    }

    return config;
  }
 
  TelaCategoria(): any {

    let item = [
      { isChecked: 'btn-info',    name: 'Todos',      value: 'option2', active: true },
      { isChecked: '', name: 'Cadastros comuns',      value: 'option2', active: false },
      { isChecked: '', name: 'Avaliaçãpo de Riscos',  value: 'option2', active: false },
      { isChecked: '', name: 'Financeiro',            value: 'option2', active: false },
      { isChecked: '', name: 'Admistrativo',          value: 'option2', active: false },
      { isChecked: '', name: 'Licenças',              value: 'option2', active: false },
    ]

    return item;
  } 
   
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
  EfetivoInefetivo(): any {

    let item = [
      {
        isChecked: '',
        name: 'Inefetivo',
        value: 'option2',
        active: false
      },
      {
        isChecked: 'checked',
        name: 'Efetivo',
        value: 'option1',
        active: true
      }

    ]

    return item;
  }

  ColorPalet(): any {

    let colors = [
        {color: '#000000'},
        {color: '#1C1C1C'},
        {color: '#363636'},
        {color: '#4F4F4F'},
        {color: '#696969'},
        {color: '#808080'},
        {color: '#A9A9A9'},
        {color: '#C0C0C0'},
        {color: '#D3D3D3'},
        {color: '#DCDCDC'},
        {color: '#6A5ACD'},
        {color: '#836FFF'},
        {color: '#6959CD'},
        {color: '#483D8B'},
        {color: '#191970'},
        {color: '#000080'},
        {color: '#00008B'},
        {color: '#0000CD'},
        {color: '#0000FF'},
        {color: '#6495ED'},
        {color: '#4169E1'},
        {color: '#1E90FF'},
        {color: '#00BFFF'},
        {color: '#87CEFA'},
        {color: '#87CEEB'},
        {color: '#ADD8E6'},
        {color: '#4682B4'},
        {color: '#B0C4DE'},
        {color: '#708090'},
        {color: '#778899'},
        {color: '#00FFFF'},
        {color: '#00CED1'},
        {color: '#40E0D0'},
        {color: '#48D1CC'},
        {color: '#20B2AA'},
        {color: '#008B8B'},
        {color: '#008080'},
        {color: '#7FFFD4'},
        {color: '#66CDAA'},
        {color: '#5F9EA0'},
        {color: '#2F4F4F'},
        {color: '#00FA9A'},
        {color: '#00FF7F'},
        {color: '#98FB98'},
        {color: '#90EE90'},
        {color: '#8FBC8F'},
        {color: '#3CB371'},
        {color: '#2E8B57'},
        {color: '#006400'},
        {color: '#008000'},
        {color: '#228B22'},
        {color: '#32CD32'},
        {color: '#00FF00'},
        {color: '#7CFC00'},
        {color: '#7FFF00'},
        {color: '#ADFF2F'},
        {color: '#9ACD32'},
        {color: '6B8E23'},
        {color: '#556B2F'},
        {color: '#808000'},
        {color: '#BDB76B'},
        {color: '#DAA520'},
        {color: '#B8860B'},
        {color: '#8B4513'},
        {color: '#A0522D'},
        {color: '#BC8F8F'},
        {color: '#CD853F'},
        {color: '#D2691E'},
        {color: '#F4A460'},
        {color: '#FFDEAD'},
        {color: '#F5DEB3'},
        {color: '#DEB887'},
        {color: '#D2B48C'},
        {color: '#7B68EE'},
        {color: '#9370DB'},
        {color: '#8A2BE2'},
        {color: '#4B0082'},
        {color: '#9400D3'},
        {color: '#9932CC'},
        {color: '#BA55D3'},
        {color: '#A020F0'},
        {color: '#8B008B'},
        {color: '#FF00FF'},
        {color: '#EE82EE'},
        {color: '#DA70D6'},
        {color: '#DDA0DD'},
        {color: '#C71585'},
        {color: '#FF1493'},
        {color: '#FF69B4'},
        {color: '#DB7093'},
        {color: '#FFB6C1'},
        {color: '#FFC0CB'},
        {color: '#F08080'},
        {color: '#CD5C5C'},
        {color: '#DC143C'},
        {color: '#800000'},
        {color: '#8B0000'},
        {color: '#B22222'},
        {color: '#A52A2A'},
        {color: '#FA8072'},
        {color: '#E9967A'},
        {color: '#FFA07A'},
        {color: '#FF7F50'},
        {color: '#FF6347'},
        {color: '#FF0000'},
        {color: '#FF4500'},
        {color: '#FF8C00'},
        {color: '#FFA500'},
        {color: '#FFD700'},
        {color: '#FFFF00'},
        {color: '#F0E68C'},
        {color: '#F0F8FF'},
        {color: '#F8F8FF'},
        {color: '#FFFAFA'},
        {color: '#FFF5EE'},
        {color: '#FFFAF0'},
        {color: '#F5F5F5'},
        {color: '#F5F5DC'},
        {color: '#FDF5E6'},
        {color: '#FFFFF0'},
        {color: '#FAF0E6'},
        {color: '#FFF8DC'},
        {color: '#FAEBD7'},
        {color: '#FFEBCD'},
        {color: '#FFE4C4'},
        {color: '#FFFFE0'},
        {color: '#FFFACD'},
        {color: '#FAFAD2'},
        {color: '#FFEFD5'},
        {color: '#FFDAB9'},
        {color: '#FFE4B5'},
        {color: '#EEE8AA'},
        {color: '#FFE4E1'},
        {color: '#FFF0F5'},
        {color: '#E6E6FA'},
        {color: '#D8BFD8'},
        {color: '#F0FFFF'},
        {color: '#E0FFFF'},
        {color: '#B0E0E6'},
        {color: '#E0FFFF'},
        {color: '#F0FFF0'},
        {color: '#F5FFFA'}
    ];

    return colors;
  }
  

  RiscoTratamentoTipo(): any {

    let item = [
      {
        isChecked: '',
        id: 1,
        name: 'Evitar',
        value: 'option2',
      },

      {
        isChecked: '',
        id: 3,
        name: 'Compartilhar',
        value: 'option2',
      },
      {
        isChecked: '',
        id: 2,
        name: 'Mitigar',
        value: 'option2',
      },

    ]

    return item;
  }

  SweetAlert(data: any) {
    Swal.fire(data.title, data.message, data.type)
  }
  confirmBox() {

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }

    })
  } 

  leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  }

}
