import { NgModule } from '@angular/core';
import { DelegacionesProfileComponent } from '../delegaciones/delegaciones-profile.component';
import { DelegacionesComponent } from '../delegaciones/delegaciones.component';
import { DirectorioComponent } from '../directorio/directorio.component';
import { IconsModule } from '../shared/icons/icons.module';
import { MapboxComponent } from '../shared/mapbox/mapbox.component';
import { SharedModule } from '../shared/shared.module';
import { InicioRoutingModule } from './inicio-routing.module';
import { FormsModule }   from '@angular/forms';

import { InicioComponent } from './inicio.component';

@NgModule({
    imports: [
        InicioRoutingModule,
        SharedModule,
        IconsModule,
        FormsModule
    ],
    exports: [
    ],
    declarations: [
        InicioComponent,
        DelegacionesComponent,
        DelegacionesProfileComponent,
        DirectorioComponent,
        MapboxComponent,
        
    ],
    providers: [],
})
export class InicioModule { }
