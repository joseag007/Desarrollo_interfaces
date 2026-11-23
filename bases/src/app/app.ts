import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { contadorComponent } from './contador/contador';
import { PlayamarJacaranda } from './Playamar-Jacaranda/playamar-jacaranda';
import { HeroesModule } from './heroes/heroes-module';
import { DbzModule } from './dbz/dbz-module'; // Ajusta la ruta si la carpeta tiene otro nombre

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [contadorComponent, PlayamarJacaranda, HeroesModule, DbzModule],
})
export class App {
  public title: string = "José";
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
