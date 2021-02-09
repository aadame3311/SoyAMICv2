import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'soyAmic';
  activeNavItem : any;
  navRoutes : any[] = [
    {
      "routes": ['/inicio/delegaciones'],
      "routeName": "Inicio",
      "marginLeftValue": "0%",
    },
    // {
    //   "routes": ['/nacional'],
    //   "routeName": "Nacional",
    //   "marginLeftValue": "50%",
    // },
  ];

  constructor() {}

  //
  checkCurrentRoute() : any {
    let local_route = window.location.pathname;
    for(let navRoute of this.navRoutes) {
      if (navRoute.routes.includes(local_route)) {
        return {
          "margin-left": navRoute.marginLeftValue
        }
      }
    }
  }

  //lifecycle hooks
  ngOnInit(): void {}
}
