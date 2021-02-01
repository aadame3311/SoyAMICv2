import { NgModule } from '@angular/core';
import { DirectorioComponent } from './directorio.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DirectorioComponent
  ],
  exports: [
    DirectorioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ]
})
export class DirectorioModule { }
