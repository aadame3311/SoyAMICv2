import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchForm } from '../data/search-form';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnChanges {

  @Input() delegacionId! : string;
  @Input() minified : boolean = false;

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
  }

  //detect changes on input attributes
  ngOnChanges($changes : SimpleChanges) {
    //on map selection, set delegacionId of form
    this.searchForm.delegacionId = $changes.delegacionId.currentValue;
  }
}
