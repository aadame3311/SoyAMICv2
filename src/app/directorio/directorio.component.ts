import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  @Input() delegacionId! : String;
  @Input() minified : boolean = false;

  constructor() { }

  searchAsociados(f: NgForm, event : any) {
    event.preventDefault();

    let delegacion_id = (f.value.delegacionId)?f.value.delegacionId:this.delegacionId;
  }
  
  ngOnInit(): void {
  }

}
