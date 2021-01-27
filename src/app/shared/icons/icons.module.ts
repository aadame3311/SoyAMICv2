import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { File, Download, Facebook, Twitter, ThumbsUp } from 'angular-feather/icons';

const icons = {
  File,
  Download,
  Facebook,
  ThumbsUp,
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
