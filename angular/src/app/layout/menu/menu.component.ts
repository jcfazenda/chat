import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: any ;

  constructor(private route: Router,) {  

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));  


 
  }

  ngOnInit(): void {
  }

  
  Route() {
    this.route.navigate(['usuarios']);
  }

}
