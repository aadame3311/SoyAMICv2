import { environment } from '../../../environments/environment';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  map! : mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng = -101;
  lat = 24;
  @Output() markerOnClick : EventEmitter<any> = new EventEmitter<any>();
  
  delegaciones : any = [
    {
      id: 1,
      name: "Nuevo Leon",
      city: "Monterrey", 
      state: "Nuevo Leon",
      email: "nuevoleon@delegacion.mx",
      phone: "(123)421-1235",
      address: "Anillo Vial Metropolitano (Avenida Francisco Samohano) # 77, Col. Adolfo Prieto C.P. 67120, Guadalupe, Nuevo León.",
      imageSrc: "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/mexico/office-pages/monterrey-mobile.jpg?rev=e5e3ef29c4e142a2b62dfdc5c8c2b7ff",
      longitude: -100.3161,
      latitude: 25.6866,
    },
    {
      id: 2,
      name: "Yucatán",
      city: "Mérida", 
      state: "Yucatán",
      email: "yucatan@delegacion.mx",
      phone: "999 261 6975",
      address: "Av Campestre 55, Campestre, 97120 Mérida, Yuc., Mexico",
      imageSrc: "https://travelyucatan.com/wp-content/uploads/2015/10/Chichen-Itza-Tours.jpg",
      longitude: -89.618791,
      latitude: 21.007949
    },
    {
      id: 3,
      name: "Sinaloa",
      city: "Sinaloa", 
      state: "Culiacán",
      email: "sinaloa@delegacion.mx",
      phone: "(123)421-1235",
      address: "Bahia de Acapulco # 2833, Col. Nuevo C.P. 80170, Culiacán, Sinaloa.",
      imageSrc: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/137000/137769-Mazatlan.jpg",
      longitude: -107.409624,
      latitude: 24.784942
    },

  ]

  constructor() {}
  
  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 4,
      center: [this.lng, this.lat]
    });

    // Set options
    for (let delegacion of this.delegaciones) {
      let mapMarker = new mapboxgl.Marker({
        draggable: false,
        color: '#4285F4'
      })
        .setLngLat([delegacion.longitude, delegacion.latitude])
        .addTo(this.map);
      
      let mapMarkerElement = mapMarker.getElement();
      mapMarkerElement.addEventListener('click', () => {
        console.log('test', delegacion.name);
        this.markerOnClick.emit(delegacion);
      });
      mapMarkerElement.addEventListener('mouseover', () => {
        mapMarkerElement.style.cursor = 'pointer';
      })
    }


    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}