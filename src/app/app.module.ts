import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {Vivienda} from './clases/vivienda';

import { AppComponent } from './app.component';
import { ForumularioComponent } from './forumulario/forumulario.component';
import { ViviendaComponent } from './vivienda/vivienda.component';

import { FormsModule } from '@angular/forms'; // importar para usar en ngModel

@NgModule({
  declarations: [
    AppComponent,
    ForumularioComponent,
    ViviendaComponent
  //  ,Vivienda
  ],
  imports: [
    BrowserModule,
    FormsModule // importar para usar en ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
