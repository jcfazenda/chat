import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { VoiceRecognitionService } from '../voice-recognition.service';
 

@Component({
  selector: 'app-whisper',
  templateUrl: './whisper.component.html',
  styleUrls: ['./whisper.component.css'], 
  providers: [VoiceRecognitionService],
})
export class WhisperComponent implements OnInit {
 
 form:            FormGroup;

 selectDialeto     = false;
 start             = false;
 isStillRecoginze  = false;
 ListDialeto:      any[]; 

 langs =

    [['Afrikaans',       ['af-ZA']],
    ['Bahasa Indonesia',['id-ID']],
    ['Bahasa Melayu',   ['ms-MY']],
    ['Català',          ['ca-ES']],
    ['Čeština',         ['cs-CZ']],
    ['Deutsch',         ['de-DE']],

    ['English',         ['en-AU', 'Australia'],
                        ['en-CA', 'Canada'],
                        ['en-IN', 'India'],
                        ['en-NZ', 'New Zealand'],
                        ['en-ZA', 'South Africa'],
                        ['en-GB', 'United Kingdom'],
                        ['en-US', 'United States']],

    ['Español',         ['es-AR', 'Argentina'],
                        ['es-BO', 'Bolivia'],
                        ['es-CL', 'Chile'],
                        ['es-CO', 'Colombia'],
                        ['es-CR', 'Costa Rica'],
                        ['es-EC', 'Ecuador'],
                        ['es-SV', 'El Salvador'],
                        ['es-ES', 'España'],
                        ['es-US', 'Estados Unidos'],
                        ['es-GT', 'Guatemala'],
                        ['es-HN', 'Honduras'],
                        ['es-MX', 'México'],
                        ['es-NI', 'Nicaragua'],
                        ['es-PA', 'Panamá'],
                        ['es-PY', 'Paraguay'],
                        ['es-PE', 'Perú'],
                        ['es-PR', 'Puerto Rico'],
                        ['es-DO', 'República Dominicana'],
                        ['es-UY', 'Uruguay'],
                        ['es-VE', 'Venezuela']],

    ['Euskara',         ['eu-ES']],
    ['Français',        ['fr-FR']],
    ['Galego',          ['gl-ES']],
    ['Hrvatski',        ['hr_HR']],
    ['IsiZulu',         ['zu-ZA']],
    ['Íslenska',        ['is-IS']],
    ['Italiano',        ['it-IT', 'Italia'],
                        ['it-CH', 'Svizzera']],
    ['Magyar',          ['hu-HU']],
    ['Nederlands',      ['nl-NL']],
    ['Norsk bokmål',    ['nb-NO']],
    ['Polski',          ['pl-PL']],
    ['Português',       ['pt-BR', 'Brasil'],
                        ['pt-PT', 'Portugal']],
    ['Română',          ['ro-RO']],
    ['Slovenčina',      ['sk-SK']],
    ['Suomi',           ['fi-FI']],
    ['Svenska',         ['sv-SE']],
    ['Türkçe',          ['tr-TR']],
    ['български',       ['bg-BG']],
    ['Pусский',         ['ru-RU']],
    ['Српски',          ['sr-RS']],
    ['한국어',            ['ko-KR']],
    ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                        ['cmn-Hans-HK', '普通话 (香港)'],
                        ['cmn-Hant-TW', '中文 (台灣)'],
                        ['yue-Hant-HK', '粵語 (香港)']],
    ['日本語',           ['ja-JP']],
    ['Lingua latīna',   ['la']]];
  
    constructor(private _formBuilder: FormBuilder, 
                public service: VoiceRecognitionService) { 
  
      this.ListDialeto = [];
      this.form        = this.ComponentForm();  
      this.service.init();
    }    

    ngOnInit(): void { 
     
    }
    ComponentForm(): FormGroup {

      return this._formBuilder.group({

          message_Gpt:        ['', Validators.required],
          message_Usuario:    ['', Validators.required],
          select_language:    ['', Validators.required],
          select_dialeto:    ['', Validators.required],

      });

    }
 
    startService() { 

      this.start = true;
      this.isStillRecoginze = this.service.start(this.form.value.select_dialeto) === true ? true : false;
    }
    stopService() {

      this.start = false;
      this.isStillRecoginze = this.service.stop() === false ? false : true;
    }

    /* LANGUAGE */
    GetDialeto() {
        
      this.ListDialeto   = [];
      this.selectDialeto = false;
      
      this.langs.forEach((nos) => {       
       
          if (this.form.value.select_language === nos[0]) { 

             nos.forEach((noss) => {        
                  let item = { id: noss[0], dialeto: noss[1] } 
                  if (nos[0] !== noss) {  this.ListDialeto.push(item); } 
              }); 

          } 

      });  
 
    } 
    SetDialeto() {
      this.selectDialeto = true;
    }

}
