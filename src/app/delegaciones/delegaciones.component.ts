import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})
export class DelegacionesComponent implements OnInit {

  delegacionProfile : any 
  convenios : any[] = [{}]
  profileVisible : boolean = false;

  constructor(private titleService : Title ) { 
    this.titleService.setTitle("soyAmic | Delegaciones")
    this.convenios = [{}]
    this.delegacionProfile = {
      name: "Cargando",
      email: "Cargando",
      phone: "Cargando",
      address: "Cargando",
      imageSrc: "https://amicstorage1.blob.core.windows.net/amicprofiles/default/profile_picture.jpg"
    }
  }

  toggleProfileView() {
    return {
      display: (this.profileVisible)?'block':'none'
    }
  }
  markerClickHandler(delegacion : any) {
    this.profileVisible = true;
    this.delegacionProfile = delegacion;

    let delegacionId = delegacion.id;
    this.convenios = [
      {
        id: 1,
        name: "convenio 1",
      },
      
      {
        id: 2,
        name: "convenio 2",
      },
      {
        id: 3,
        name: "convenio 3",
      },

    ]
  }

  ngOnInit(): void {
  }

}
