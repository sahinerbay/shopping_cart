/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core.module';
import { SharedModule } from './components/shared/shared.module';
import { CheckoutModule } from './components/checkout/checkout.module';
import { CheckoutRoutingModule} from './components/checkout/checkout-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		SharedModule,
		CheckoutModule,
		AppRoutingModule,
		CoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
