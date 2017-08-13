import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {Vivienda} from 'clases/vivienda';

@Component({
  selector: 'app-forumulario',
  templateUrl: './forumulario.component.html',
  styleUrls: ['./forumulario.component.css']
})
export class ForumularioComponent implements OnInit {

  alquiler: boolean = true;


  viviendas:Vivienda[] = [
    new Vivienda("calle madalena", "lliria", 300, true,"http://formenterain.com/wp-content/uploads/2017/04/Casa-Casbah-5-300x300.jpg"),
    new Vivienda("calle mostoles", "massanasa", 120000, false,"http://huetearquitectos.com/wp-content/uploads/2017/06/casa-marbella-300x300.jpg"),
    new Vivienda("calle rioja", "catarroja", 450, true,"http://www.cubeinteriora.es/wp-content/uploads/2017/02/construccion-casa-madera4-300x300.jpg"),
    new Vivienda("calle meliana", "benetusser", 320, true,"http://loff.it/wp-content/uploads/2017/04/loffit-fiera-vista-en-siesta-key-una-casa-de-escandalo-a-subasta-en-florida-02-300x300-1493322247.jpg"),
    new Vivienda("calle benidorm", "sedavi", 200000, false,"http://inmobiliariagoals.com/wp-content/uploads/2017/04/Casa_La_Campi%C3%B1a_Xochitepec_Morelos_04-300x300.jpg"),
    new Vivienda("calle ponferrada", "catarroja", 300, true,"http://loff.it/wp-content/uploads/2017/05/loffit-una-casa-con-vistas-a-oakland-11-300x300.jpeg"),
    new Vivienda("calle ferrol", "meliana", 500000, false,"http://kalibienesraices.com/wp-content/uploads/2017/03/Render-Fachada-300x300.png"),
  ];


  constructor() { }

  cambioTipo(tipo: boolean) {
    this.alquiler = tipo;
  //  console.log(this.alquiler)
   }



   funcionIf(vivienda: Vivienda):boolean {

     return this.alquiler == vivienda.alquiler;
   }


  ngOnInit() {
  }

}
