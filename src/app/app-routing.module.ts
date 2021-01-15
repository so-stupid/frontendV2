import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './utils/app.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule), canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('./forms/auth/auth.module').then(m => m.AuthModule)},
  {path: 'price', loadChildren: () => import('./pages/price/price.module').then(m => m.PriceModule)},
  {path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule)},
  {path: 'registration', loadChildren: () => import('./forms/registration/registration.module').then(m => m.RegistrationModule)},
  {path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule), canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
