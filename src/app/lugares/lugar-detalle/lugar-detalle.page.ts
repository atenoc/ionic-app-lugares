import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Lugar } from '../Lugar.model';
import { LugarService } from '../lugar.service';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-lugar-detalle',
  templateUrl: './lugar-detalle.page.html',
  styleUrls: ['./lugar-detalle.page.scss'],
})
export class LugarDetallePage implements OnInit {

  lugar : Lugar

  constructor(private activatedRoute: ActivatedRoute, private lugarService:LugarService,
    private router:Router, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //if(!paramMap)
      const idRecibido = paramMap.get('placeId')
      this.lugar = this.lugarService.getLugar(idRecibido)
    })
  }

  async eliminarLugar(){

    const alertElement = await this.alertCtrl.create({
      header:'¿Estás seguro de eliminar?',
      message:'No podrás revertir esta acción',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Eliminar',
          handler: () =>{
            this.lugarService.deleteLugar(this.lugar.id)
            console.log("eliminado");
            this.router.navigate(['/lugares'])
          }
        }
      ]
    });
    await alertElement.present();
  }

}
