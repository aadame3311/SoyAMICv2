import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchForm } from 'src/app/data/search-form';
import { SearchService } from 'src/app/data/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm : SearchForm = {
    name: '',
    delegacionId: "0",
    especialidadIdList: ["0"]
  }
  constructor(private router : Router) { }

  searchSubmit(form : NgForm, e : Event) {
    if (form.value.name !== '') {
      console.log("executing search...");
      this.router.navigate([`/resultados`, this.searchForm.name])
    }


    e.preventDefault();
  }
  ngOnInit(): void {
  }

}
