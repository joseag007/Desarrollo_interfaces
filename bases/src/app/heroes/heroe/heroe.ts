
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-heroe',
  styleUrl: './heroe.css',
  templateUrl: './heroe.html',
})
export class Heroe {
  public nombre: string = "Goku";
  public edad: number = 35;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  private getNombrePrivado(): string {
    return `Kakarot`;
  }

  public cambiarNombre(): string {
    this.nombre = `Vegeta`;
    return this.nombre;
  }

  public cambiarEdad(): number {
    this.edad = 19;
    return this.edad;
  }
}
