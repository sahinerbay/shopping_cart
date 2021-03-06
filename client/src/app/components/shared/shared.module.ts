import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*CUSTOME MODULES*/
import { PipesModule } from '@app/_pipes/pipes.module';
import { DirectivesModule } from '@app/_directives';
import { ButtonsModule } from './buttons/buttons.module';
import { CustomFormsModule } from './forms/forms.module';
import { ProductModule } from './product/product.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

/*COMPONENTS*/
import { ProductsListComponent } from '@app/components/products-list/products-list.component';
import { ProductComponent } from '@app/components/products-list/product/product.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { LogoComponent } from '@app/components/header/logo/logo.component';
import { LoadingModalComponent } from '@app/components/helpers/loading-modal/loading-modal.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		PipesModule,
		DirectivesModule,
		ButtonsModule,
		CustomFormsModule,
		ProductModule,
		ShoppingCartModule
	],
	declarations: [
		ProductsListComponent,
		ProductComponent,
		HeaderComponent,
		LogoComponent,
		LoadingModalComponent,
	],
	exports: [
		ProductsListComponent,
		ProductComponent,
		HeaderComponent,
		LogoComponent,
		LoadingModalComponent,
		ButtonsModule,
		CustomFormsModule,
		ProductModule,
		ShoppingCartModule
	],
	providers: [

	]
})
export class SharedModule { }
