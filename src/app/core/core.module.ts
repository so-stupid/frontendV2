import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {WorkersFormComponent} from '../forms/workers-form/workers-form.component';
import {InputFieldComponent} from './form-controls/input-field/input-field.component';
import {TempComponent} from './temp/temp.component';
import {PriceFormComponent} from '../forms/price-form/price-form.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent, HeaderComponent,
    InputFieldComponent, TempComponent, WorkersFormComponent, PriceFormComponent,],
  exports: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    InputFieldComponent,
    TempComponent,
    WorkersFormComponent,
    PriceFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class CoreModule {
}
