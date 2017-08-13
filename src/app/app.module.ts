import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumularioComponent } from './forumulario/forumulario.component';
import { ViviendaComponent } from './vivienda/vivienda.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumularioComponent,
    ViviendaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
