
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-Playamar-Jacaranda',
  styleUrl: './Playamar-Jacaranda.css',
  templateUrl: './Playamar-Jacaranda.html',
})
export class PlayamarJacaranda {
  public nombre: string = "IES Playamar";
  public localidad: string = "Torremolinos";
  public familiasProfesionales: string[]= ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"];
  public centro: string = "IES PLAYAMAR";
  public img: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0jWehmx93KAKnNpHuwsq2XjOqrKPpHaOMHsw61i2Xw&s=10";

  public cambiarCentro(): void {
    if(this.nombre.match("IES Playamar")) {
      this.nombre = "IES Jacaranda";
      this.localidad = "Churriana";
      this.familiasProfesionales = ["Hostelería y Turismo"];
      this.centro = "IES JACARANDA";
      this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8dVXiKOEMrGw5eXIJa2Du6XPiYlDYFR_-j7N9octNg&s=10";

    } else {
      if(this.nombre.match("IES Jacaranda")) {
      this.nombre = "IES Playamar";
      this.localidad = "Torremolinos";
      this.familiasProfesionales = ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"];
      this.centro = "IES PLAYAMAR";
      this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0jWehmx93KAKnNpHuwsq2XjOqrKPpHaOMHsw61i2Xw&s=10";

    }
    }
  }

}
