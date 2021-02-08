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
  @Input() minified : boolean = false;

  //keep default copy of data in case we need to reset it
  private _searchForm : SearchForm = {
    name: '',
    delegacionId: '1',
    especialidadId: '1'
  };
  searchForm : SearchForm = { ...this._searchForm }

  constructor() { }

<<<<<<< HEAD
  searchAsociados(form: NgForm, event : any) {
    console.log(this.searchForm);
    this.searchForm = { ...this._searchForm };
=======
  searchAsociados(f: NgForm, event : any) {
    event.preventDefault();

    let delegacion_id = (f.value.delegacionId)?f.value.delegacionId:this.delegacionId;
>>>>>>> 7223f54c35edf78f0af94aa68aeaa17b2b7751f2
  }
  
  ngOnInit(): void {
  }

}
