import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { File, Download, Facebook, Twitter } from 'angular-feather/icons';

const icons = {
  File,
  Download,
  Facebook,
  Twitter,
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
