import { Component, OnInit } from '@angular/core';
import { LugarService } from './lugar.service'

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  lugares = []

  constructor(private lugarService: LugarService) { }

  ngOnInit() {
    this.lugares = this.lugarService.getLugares()
    console.log("Lugares cargados por 1ra vez")
  }

  ionViewWillEnter(){
    this.lugares = this.lugarService.getLugares()
    console.log("Lugares cargados por 2ra vez")
  }

  addNewLugar(){
    
  }

}
