import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { contadorComponent } from './contador/contador';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [contadorComponent],
})
export class App {
  public title: string = "José";
  public x:number = 1;
  public contador: number=0;

  incrementarPor(): void {
  this.contador +=this.x;
  }
  decrementarPor(): void {
  this.contador -=this.x;
  }
  resetear(): void {
    this.contador = 0;
  }
}
