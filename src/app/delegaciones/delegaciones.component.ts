import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})
export class DelegacionesComponent implements OnInit {

  delegacionProfile : any = {
    name: "Nuevo Leon",
    email: "nuevoleon@delegacion.mx",
    phone: "(123)421-1235",
    address: "123 Distrito 5 Colonia 10 Monterrey, NL, Mexico 19920"
  }

  constructor(private titleService : Title ) { 
    this.titleService.setTitle("soyAmic | Delegaciones")
  }

  ngOnInit(): void {
  }

}
