import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  styleUrl: './dbz-lista.css',
  templateUrl: './dbz-lista.html',
  standalone:false
})
/*export class Lista implements OnInit {
  public nombreHeroes:string[] = ['Goku', 'Piccolo', 'Vegeta', 'Gohan', 'Trunks'];

  constructor() {}

  ngOnInit(): void {}
}*/

export class DbzListaComponent{
  public listaPersonajes: Personaje[] = [{
    nombre: 'Trunks',
    fuerza: 7000
  }]
}
