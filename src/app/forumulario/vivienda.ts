export class Vivienda {

  direccion: string;
  poblacion: string;
  precio: number;
  alquiler: boolean;

  constructor(direccion:string, poblacion:string, precio:number, alquiler:boolean){
    this.direccion = direccion;
    this.poblacion = poblacion;
    this.precio = precio;
    this.alquiler = alquiler;
  }

}
