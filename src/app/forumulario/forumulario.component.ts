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



  ngOnInit() {

    console.log(this.precioMinimo);
  }

}
