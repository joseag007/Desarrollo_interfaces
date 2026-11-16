import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista implements OnInit {
  public nombreHeroes:string[] = ['Goku', 'Piccolo', 'Vegeta', 'Gohan', 'Trunks'];

  constructor() {}

  ngOnInit(): void {}
}
