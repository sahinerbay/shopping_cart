import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

/*COMPONENTS-FORMS*/
import { ShippingAddressFormComponent } from './shipping-address-form/shipping-address-form.component';
import { ShippingMethodsFormComponent } from './shipping-methods-form/shipping-methods-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  imports: [
	 CommonModule,
	 FormsModule
  ],
  declarations: [
	ShippingAddressFormComponent,
	ShippingMethodsFormComponent,
	PaymentFormComponent,
  ],
  exports: [
	ShippingAddressFormComponent,
	ShippingMethodsFormComponent,
	PaymentFormComponent,
  ]
})
export class CustomFormsModule { }
