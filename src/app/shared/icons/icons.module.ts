import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { File, Download, MapPin, Phone, Mail } from 'angular-feather/icons';

const icons = {
  File,
  MapPin, 
  Phone, 
  Mail,
  Download
};


@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
