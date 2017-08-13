import { Component, OnInit, Input } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {
  @Input() direccion:string;
  @Input() poblacion:string;
  @Input() precio:number;
  @Input() alquiler:boolean;
  @Input() foto:string;

  backgroundImg:any;
  //name: string = "http://formenterain.com/wp-content/uploads/2017/04/Casa-Casbah-5-300x300.jpg";
    name: string;



  constructor(private sanitizer:DomSanitizer) {
  //  this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url('+this.name+')');

 }

 putImage(sanitizer:DomSanitizer):void{
   this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url('+this.name+')');
 }


  ngOnInit() {

    this.name = this.foto;
    this.putImage(this.sanitizer);

  }

}
