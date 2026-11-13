
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <button (click)="incrementarPor()">+1</button>
    <button (click)="resetear()">Resetear</button>
    <button (click)="decrementarPor()">-1</button>

    <h3>Contador: {{contador}}</h3>
    <h3>Valor de X: {{x}}</h3>
  `,
  standalone: true
})
export class contadorComponent {

  public x: number = 1;
  public contador: number = 0;

  incrementarPor(): void {
    this.contador += this.x;
  }

  decrementarPor(): void {
    this.contador -= this.x;
  }

  resetear(): void {
    this.contador = 0;
  }
}
