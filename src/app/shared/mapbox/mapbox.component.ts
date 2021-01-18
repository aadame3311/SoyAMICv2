import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  map! : mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 24;
  lng = -101;

  constructor() {}

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 4,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}