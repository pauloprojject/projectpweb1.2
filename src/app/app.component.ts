import { Component } from '@angular/core';
import { Usuario } from 'src/shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social IFPB';
  usuario?: Usuario;

  constructor(){
    this.usuario = new Usuario();
    this.usuario.nome = "Paulo Victor Calixto Silva";
  }
}
