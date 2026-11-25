import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameComponent } from './pages/main-page';
import { DbzListaComponent } from './components/dbz-lista/dbz-lista';
import { DbzAddPersonaje } from './components/dbz-add-personaje/dbz-add-personaje';

@NgModule({
  declarations: [
    NameComponent,
    DbzListaComponent,
    DbzAddPersonaje
  ],
  exports: [
    NameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
