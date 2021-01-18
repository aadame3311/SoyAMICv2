import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { MapboxComponent } from './mapbox/mapbox.component';



@NgModule({
  declarations: [
    NavLinkComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    NavLinkComponent,
  ],
  providers: [
    Title
  ]
})
export class SharedModule { }
