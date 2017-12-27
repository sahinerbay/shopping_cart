import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CheckoutComponent } from './components/pages/checkout/checkout.component'
import { HomeComponent } from './components/pages/home/home.component';

const appRoutes: Routes = [
	{ path: 'checkout', component: CheckoutComponent },
	{ path: '',        component: HomeComponent },
 ];
 
 @NgModule({
	imports: [
	  RouterModule.forRoot(appRoutes)
	],
	exports: [
	  RouterModule
	]
 })

export class AppRoutingModule { }
