import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameComponent } from './pages/main-page';
// 1. Importa tus dos componentes (revisa el nombre exacto de la clase dentro de cada archivo)
import { DbzLista } from './components/dbz-lista/dbz-lista';
import { DbzAddPersonaje } from './components/dbz-add-personaje/dbz-add-personaje';

@NgModule({
  declarations: [
    NameComponent,
    DbzLista,        // 2. Decláralos aquí
    DbzAddPersonaje  // <-- y aquí
  ],
  exports: [
    NameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
