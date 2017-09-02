import { Component, OnInit, Input } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import {Vivienda} from 'clases/vivienda';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {

 @Input() vivienda: Vivienda;

  backgroundImg:any;
  name: string;
  width: number= 300;
  height: number= 300;


  constructor(private sanitizer:DomSanitizer) {
  }

 putImage(sanitizer:DomSanitizer):void{
   this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url('+this.name+')');
 }

  ngOnInit() {
    this.name = this.vivienda.foto;
    this.putImage(this.sanitizer);
  }

}
