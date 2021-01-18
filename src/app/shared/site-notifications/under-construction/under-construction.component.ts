import { Component, OnInit, Input } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})

export class UnderConstructionComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
