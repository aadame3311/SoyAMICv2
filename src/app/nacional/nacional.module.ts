import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NacionalRoutingModule } from './nacional-routing.module';

import { NacionalComponent } from './nacional.component';

@NgModule({
    imports: [
        SharedModule,
        NacionalRoutingModule,
    ],
    exports: [],
    declarations: [NacionalComponent],
    providers: [],
})
export class NacionalModule { }
