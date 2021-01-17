import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './utils/app.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'price', loadChildren: () => import('./pages/price/price.module').then(m => m.PriceModule)},
  {path: 'order', loadChildren: () => import('./pages/order-page/order-page.module').then(m => m.OrderPageModule), canActivate: [AuthGuard]},
  {path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
