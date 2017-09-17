import { PipeTransform, Pipe } from '@angular/core';
import { Vivienda } from './../clases/vivienda';

@Pipe({
  name: 'filtro_precio',
  pure: false // esto es para que el ngfor que enseña las viviendas haga un reload cuando cambia algo del pipe, para ver los cambios automaticamente
})

export class filtradoViviendas implements PipeTransform {
    precioMin: number;
    filtroMeGusta: boolean;

   transform(value: Vivienda[], precio_minimo: string, precio_maximo: string, filter: string): Vivienda[] {
     // filter es la variable que determina si la vivienda esta en favoritos
       if(filter == "todos"){
         this.filtroMeGusta = true;
       }else if(filter == "true"){
         this.filtroMeGusta = true;
       }else{
         this.filtroMeGusta = false;
       }

      precio_minimo == undefined || precio_minimo == null || precio_minimo == "" ? this.precioMin = 0 : this.precioMin = Number(precio_minimo);

      if(precio_maximo == undefined || precio_maximo == null || precio_maximo === ""){

        if(filter == "todos"){
          value = value.filter((vivienda: Vivienda) => vivienda.precio >= this.precioMin );
        }else{
          value = value.filter((vivienda: Vivienda) => vivienda.megusta == this.filtroMeGusta && vivienda.precio >= this.precioMin );
        }

      }else{


        if(filter == "todos"){
          value = value.filter((vivienda: Vivienda) => (vivienda.precio >= this.precioMin && vivienda.precio <= Number(precio_maximo)) );
        }else{
          value = value.filter((vivienda: Vivienda) => (vivienda.precio >= this.precioMin && vivienda.precio <= Number(precio_maximo) && vivienda.megusta == this.filtroMeGusta) );
        }

      }

     return value;
   }


}
