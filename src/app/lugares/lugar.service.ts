import { Injectable } from '@angular/core';
import { Lugar } from './Lugar.model'

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  private lugares: Lugar[] =[
    {
      id:'1',
      titulo:'Puebla',
      urlImagen: "https://www.dondeir.com/wp-content/uploads/2017/06/pueblos-magicos-de-puebla-cerca-de-cdmx-09.jpg",
      comentarios: ['Lugar hermoso','Muy buena experiencia, lo recomiendo','Tiene muchos platillos muy ricos']
    },
    {
      id:'2',
      titulo:'Oaxaca',
      urlImagen: "https://www.eluniversal.com.mx/sites/default/files/2019/10/23/oaxaca_que_hacer.jpg",
      comentarios: ['Lugar hermoso','Muy buena experiencia, lo recomiendo','Tiene muchos platillos muy ricos']
    },
    {
      id:'3',
      titulo:'Cuetzalan',
      urlImagen: "https://pbs.twimg.com/media/D5QmeT0WsAMQ72t.jpg",
      comentarios: ['Lugar hermoso','Muy buena experiencia, lo recomiendo','Tiene muchos platillos muy ricos']
    },
    {
      id:'4',
      titulo:'Cuetzalan',
      urlImagen: "https://pbs.twimg.com/media/D5QmeT0WsAMQ72t.jpg",
      comentarios: []
    }
  ]

  constructor() { }

  getLugares(){
    return [...this.lugares]
  }

  getLugar(id: string){
    return {
      ...this.lugares.find(lugar => {
        return lugar.id === id
      })
    }
  }

  addLugar(titulo:string, urlImagen:string){
    this.lugares.push({
      titulo,
      urlImagen,
      comentarios: [],
      id: this.lugares.length + 1 +""
    })
  }

  deleteLugar(id: string){
    this.lugares = this.lugares.filter(lugar => {
      return lugar.id !== id
    })
  }
}
