import { NgModule } from '@angular/core';
import { Heroe } from './heroe/heroe';
import { Lista } from './lista/lista';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Heroe, Lista],
  exports: [Heroe, Lista],
  imports: [CommonModule],
})
export class HeroesModule {}
