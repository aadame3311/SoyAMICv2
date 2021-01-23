import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { File, Download } from 'angular-feather/icons';

const icons = {
  File,
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
