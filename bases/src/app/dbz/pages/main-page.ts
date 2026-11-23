import {Component, OnInit} from '@angular/core'
import {Personaje} from '../interfaces/personaje.interface'
import { DbzAddPersonaje } from '../components/dbz-add-personaje/dbz-add-personaje';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html',
  standalone: false
})
export class NameComponent implements OnInit{
  constructor() {}

  ngOnInit() {}
}

export class MainPageComponent{
  public personajes: Personaje[] = [{
    nombre: 'Krilin',
    fuerza: 500
  },{
    nombre: 'Goku',
    fuerza: 10000
  }];
}
