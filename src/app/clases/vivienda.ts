export class Vivienda {

  direccion: string;
  poblacion: string;
  precio: number;
  alquiler: boolean;
  foto: string;

  constructor(direccion:string, poblacion:string, precio:number, alquiler:boolean, foto:string){
    this.direccion = direccion;
    this.poblacion = poblacion;
    this.precio = precio;
    this.alquiler = alquiler;
    this.foto = foto;
  }

}
