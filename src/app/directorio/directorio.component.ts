import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchForm } from '../data/search-form';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  @Input() delegacionId! : String;

  //keep default copy of data in case we need to reset it
  private _searchForm : SearchForm = {
    name: '',
    delegacionId: '1',
    especialidadId: '1'
  };
  searchForm : SearchForm = { ...this._searchForm }

  constructor() { }

  searchAsociados(form: NgForm, event : any) {
    console.log(this.searchForm);
    this.searchForm = { ...this._searchForm };
  }
  
  ngOnInit(): void {
  }

}
