import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //declaracion de variables
  name !: string;
  lastname !: string
  obj: Object
  show: boolean
  constructor() { //inicializando variables
    this.name = ""
    this.lastname = ""
    this.obj = {
      name: this.name,
      lastname: this.lastname
    }
    this.show = false
  }
  ngOnInit() { 

  }
  showObject() {
    this.obj = {  //asignando valores al objeto
      name: this.name,
      lastname: this.lastname
    }
    this.obj = JSON.stringify(this.obj) //para que se muestre bien en pantalla se transforma a string
    this.show = true //para mostrar el objetyo una vez que se pulse el boton
  }

}
