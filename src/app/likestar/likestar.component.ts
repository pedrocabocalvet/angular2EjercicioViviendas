import { Component, OnInit, Input } from '@angular/core';
import { Vivienda } from './../clases/vivienda';

@Component({
  selector: 'app-likestar',
  templateUrl: './likestar.component.html',
  styleUrls: ['./likestar.component.css']
})
export class LikestarComponent implements OnInit {

  @Input() vivienda: Vivienda;

  constructor() { }

  ngOnInit() {
  }

}
