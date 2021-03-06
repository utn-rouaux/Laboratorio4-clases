import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas:Router, public usuario:UsuarioService) { 

  }

  ngOnInit(): void {
  }

  siguiente() {
    //this.usuario.nombre = 'Juan';
    var modelo = this;
    setTimeout(function() {
      //Abre un hilo, por lo tanto no podemos usar "this" dentro de la función
      //El this remitirá a otra instancia de objecto
      modelo.rutas.navigate(['home']);
    }, 2000);
  }

}
