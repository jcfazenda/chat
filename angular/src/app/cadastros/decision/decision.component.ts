import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css'], 
})
export class DecisionComponent implements OnInit {
 
  form:       FormGroup;  

  constructor(private router: Router,  
              private _formBuilder: FormBuilder, 
              public translate : TranslateService ) { 


    this.form = this.ComponentForm(); 

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
