import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public title: string = "José";
  public contador: number=10;

  incrementarPor(): void {
  this.contador +=1;
  }
  decrementarPor(): void {
  this.contador -=1;
  }
}
