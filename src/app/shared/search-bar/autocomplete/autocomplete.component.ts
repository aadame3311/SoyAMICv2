import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  autoCompleteResults : any[] = [];
  @Input() isVisible = false;
  constructor() { }
  toggleView() {
    this.isVisible = false;
  }
  ngOnInit(): void {
  }

}
