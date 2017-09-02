export class Vivienda {

  direccion: string;
  poblacion: string;
  precio: number;
  alquiler: boolean;
  foto: string;
  descripcion: string;
  numhab: number;
  telefono: string;
  correo: string

  constructor(direccion:string,
              poblacion:string,
              precio:number,
              alquiler:boolean,
              foto:string,
              descripcion: string,
              numhab: number,
              telefono: string,
              correo: string){

    this.direccion = direccion;
    this.poblacion = poblacion;
    this.precio = precio;
    this.alquiler = alquiler;
    this.foto = foto;
    this.descripcion = descripcion;
    this.numhab = numhab;
    this.telefono = telefono;
    this.correo = correo;
  }

}
