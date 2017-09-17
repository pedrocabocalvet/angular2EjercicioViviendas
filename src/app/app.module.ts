import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ForumularioComponent } from './forumulario/forumulario.component';
import { ViviendaComponent } from './vivienda/vivienda.component';
import { filtradoViviendas } from './clases/filtrado-viviendas.pipe';
import { FormsModule } from '@angular/forms';
import { LikestarComponent } from './likestar/likestar.component'; // importar para usar en ngModel

@NgModule({
  declarations: [
    AppComponent,
    ForumularioComponent,
    ViviendaComponent,
    filtradoViviendas,
    LikestarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule // importar para usar en ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
