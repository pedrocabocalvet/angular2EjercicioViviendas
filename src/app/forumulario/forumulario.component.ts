import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Vivienda } from './../clases/vivienda';
import { ModelViviendas } from './../modelos/ModelViviendas';

@Component({
  selector: 'app-forumulario',
  templateUrl: './forumulario.component.html',
  styleUrls: ['./forumulario.component.css']
})
export class ForumularioComponent implements OnInit {

  alquiler: string = "todos";
  like: string ="todos";
  precioMinimo: string;
  precioMaximo: string;

  titulo: string = "Todas las viviendas";
  viviendas:Vivienda[] = new ModelViviendas().viviendas;

  constructor() { }

showHouse(vivienda):boolean{

  if(this.alquiler == "todos"){
    return true;
  }else{
    if(""+vivienda.alquiler == this.alquiler){
      return true;
    }else if(""+vivienda.alquiler != this.alquiler){
      return false;
    }
  }
}

cambiarTitulo(): void{
  if(this.alquiler == "todos"){

    if(this.like == "todos"){
      this.titulo = "Todas las viviendas";
    }else if(this.like == "true"){
      this.titulo = "Viviendas en favoritos";
    }else{
      this.titulo = "Viviendas que no están en favoritos";
    }

  }else if(this.alquiler == "true"){
    if(this.like == "todos"){
      this.titulo = "Todas las viviendas en alquiler";
    }else if(this.like == "true"){
      this.titulo = "Viviendas en alquiler y en favoritos";
    }else{
      this.titulo = "Viviendas en alquiler que no están en favoritos";
    }
  }else{
    if(this.like == "todos"){
      this.titulo = "Todas las viviendas en venta";
    }else if(this.like == "true"){
      this.titulo = "Viviendas en venta y en favoritos";
    }else{
      this.titulo = "Viviendas en venta que no están en favoritos";
    }
  }
}



  ngOnInit() {

    console.log(this.precioMinimo);
  }

}
