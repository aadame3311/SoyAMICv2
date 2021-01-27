import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  @Input() delegacionId! : String;

  constructor() { }

  searchAsociados(f: NgForm, event : any, name:String, especialidadId:String) {
    console.log('searching...');
    event.preventDefault();
    console.log(f.value);
  }
  
  ngOnInit(): void {
  }

}
