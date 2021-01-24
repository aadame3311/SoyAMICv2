import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delegaciones-profile',
  templateUrl: './delegaciones-profile.component.html',
  styleUrls: ['./delegaciones-profile.component.css']
})
export class DelegacionesProfileComponent implements OnInit {

  @Input() delegacion : any 
  @Input() convenios : any
  iconSize : number = 10

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
