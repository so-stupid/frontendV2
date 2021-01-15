import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PriceRoutingModule} from './price-routing.module';
import {PriceComponent} from './price.component';
import {CoreModule} from '../../core/core.module';


@NgModule({
  declarations: [PriceComponent],
  imports: [
    CommonModule,
    PriceRoutingModule,
    CoreModule,
  ],
})
export class PriceModule {
}
