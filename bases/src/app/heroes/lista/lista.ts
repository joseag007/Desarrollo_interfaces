import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../dbz/interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
  standalone:false
})
/*export class Lista implements OnInit {
  public nombreHeroes:string[] = ['Goku', 'Piccolo', 'Vegeta', 'Gohan', 'Trunks'];

  constructor() {}

  ngOnInit(): void {}
}*/

export class ListaComponent{
  public listaPersonajes: Personaje[] = [{
    nombre: 'Trunks',
    fuerza: 7000
  }]
}
