import { Injectable } from '@angular/core';
declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {

  recognition           = new webkitSpeechRecognition();
  isStoppedSpeechRecog  = false;
  public text           = '';

  tempWords:                any;
  transcript_arr:           any[];
  confidence_arr:           any[];
  isStarted                 = false; //<< this Flag to check if the user stop the service
  isStoppedAutomatically    = true; //<< this Flag to check if the service stopped automaticically.

  constructor() {

    this.transcript_arr = [];
    this.confidence_arr = [];

  }


    init() { 
        
        this.recognition.continuous     = true;
        this.recognition.interimResults = true;
        this.recognition.lang           = 'pt-BR';

        this.recognition.addEventListener('result', (e: any) => {

            const transcript = Array.from(e.results)
                .map((result: any) => result[0])
                .map((result) => result.transcript)
                .join('');

            this.transcript_arr.push(transcript);
            this.tempWords = transcript;  console.log(this.transcript_arr);
           

            const confidence = Array.from(e.results)
                .map((result: any) => result[0])
                .map((result) => result.confidence)
                .join('');

            this.confidence_arr.push(confidence); console.log(this.confidence_arr);
            
        });

        this.recognition.addEventListener('end', (condition: any) => {

            this.wordConcat();

            if (this.isStoppedAutomatically) {

                this.recognition.stop();  console.log('stopped automatically!!');
                this.recognition.start(); console.log('started automatically!!');
                
                this.isStoppedAutomatically = true;
            }

        });
    }

    start(item: any) {

        this.recognition.lang = item;

        if (!this.isStarted) {
            this.recognition.start();
            this.isStarted = true;
            console.log('Speech recognition started');
        }
        return true;
    }

    stop() {

        if (this.isStarted) {
            this.isStoppedAutomatically = false;
            this.wordConcat();
            this.recognition.stop();
            this.isStarted = false;
            console.log('End speech recognition by user');
        }
        return false;
    }

    wordConcat() {
        this.text =  this.tempWords;
        this.tempWords = '';
    }
}
