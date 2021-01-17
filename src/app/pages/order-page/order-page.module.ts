import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';
import {FormsModule} from '@angular/forms';
import {CoreModule} from '../../core/core.module';


@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    OrderPageRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class OrderPageModule { }
