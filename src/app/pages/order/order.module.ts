import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [OrderComponent],
    exports: [
        OrderComponent
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        FormsModule
    ]
})
export class OrderModule { }
