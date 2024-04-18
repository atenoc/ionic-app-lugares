import { Component, OnInit } from '@angular/core';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar-agregar',
  templateUrl: './lugar-agregar.page.html',
  styleUrls: ['./lugar-agregar.page.scss'],
})
export class LugarAgregarPage implements OnInit {

  constructor(private lugarService: LugarService) { }

  ngOnInit() {
  }

  agregarLugar(titulo: HTMLInputElement, urlImagen: HTMLInputElement){
    console.log(titulo.value, urlImagen.value);

    this.lugarService.addLugar(titulo.value, urlImagen.value)

    console.log("agregado")
  }

}
