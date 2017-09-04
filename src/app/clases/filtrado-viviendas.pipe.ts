import { PipeTransform, Pipe } from '@angular/core';
import { Vivienda } from './../clases/vivienda';

@Pipe({
  name: 'filtro_precio'
})

export class filtradoViviendas implements PipeTransform {
    precioMin: number;
   transform(value: Vivienda[], precio_minimo: string, precio_maximo: string): Vivienda[] {

      precio_minimo == undefined || precio_minimo == null || precio_minimo == "" ? this.precioMin = 0 : this.precioMin = Number(precio_minimo);

      if(precio_maximo == undefined || precio_maximo == null || precio_maximo === ""){
        value = value.filter((vivienda: Vivienda) => vivienda.precio >= this.precioMin );
      }else{
        value = value.filter((vivienda: Vivienda) => (vivienda.precio >= this.precioMin && vivienda.precio <= Number(precio_maximo)) );
      }

     return value;
   }


}
