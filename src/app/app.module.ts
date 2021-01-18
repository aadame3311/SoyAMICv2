import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnderConstructionComponent } from './shared/site-notifications/under-construction/under-construction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NacionalComponent } from './nacional/nacional.component';
import { SharedModule } from './shared/shared.module';
import { InicioModule } from './inicio/inicio.module';
import { NacionalModule } from './nacional/nacional.module';
import { DelegacionesProfileComponent } from './delegaciones/delegaciones-profile.component';

const materialImports : any = [
]

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    InicioModule,
    NacionalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ...materialImports,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
