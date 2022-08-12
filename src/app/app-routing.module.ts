import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutContentComponent } from './modules/checkout/components/checkout-content/checkout-content.component';
import { CheckoutSuccessComponent } from './modules/checkout/components/checkout-success/checkout-success.component';
import { StoreComponent } from './modules/store/components/store/store.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent
  },
  {
    path: 'checkout', component: CheckoutContentComponent
  },
  {
    path: 'checkout-envio', component: CheckoutSuccessComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }