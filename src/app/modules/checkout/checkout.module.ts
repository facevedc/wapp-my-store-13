import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutContentComponent } from './components/checkout-content/checkout-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';



@NgModule({
  declarations: [
    CheckoutContentComponent,
    CheckoutSuccessComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckoutContentComponent,
    CheckoutSuccessComponent
  ]
})
export class CheckoutModule { }
