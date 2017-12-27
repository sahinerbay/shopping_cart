/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*SERVICES*/
import { ProductsHttpService } from './_services/products-http.service';
import { StorageService } from './_services/storage.service';
import { ShoppingCartService } from './_services/shopping-cart/shopping-cart.service';
import { ShoppingCartModalService } from './_services/shopping-cart/shopping-cart-modal.service';
import { ShoppingCartStateService } from './_services/shopping-cart/shopping-cart-state.service';

/*DIRECTIVES*/
import { DeleteIconHoverDirective } from './_directives/delete-icon-hover.directive';
import { ShoppingCartModalDirective } from './_directives/shopping-cart-modal.directive';

/*PIPES*/
import { FixPricePipe } from './_pipes/fix-price.pipe';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/products-list/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/shared/add-button/add-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ShoppingCartComponent } from './components/header/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductImageComponent } from './components/shared/product-image/product-image.component';
import { ProductPriceComponent } from './components/shared/product-price/product-price.component';
import { ProductTitleComponent } from './components/shared/product-title/product-title.component';
import { ShoppingCartModalComponent } from './components/header/shopping-cart/shopping-cart-modal/shopping-cart-modal.component';
import { DeleteIconComponent } from './components/shared/delete-icon/delete-icon.component';
import { ProductTotalQuantityComponent } from './components/shared/product-total-quantity/product-total-quantity.component';
import { ProductTotalPriceComponent } from './components/shared/product-total-price/product-total-price.component';


@NgModule({
	declarations: [
		AppComponent,
		ProductsListComponent,
		ProductComponent,
		HeaderComponent,
		AddButtonComponent,
		LogoComponent,
		ShoppingCartComponent,
		CheckoutComponent,
		ProductImageComponent,
		ProductPriceComponent,
		ProductTitleComponent,
		ShoppingCartModalComponent,
		FixPricePipe,
		DeleteIconComponent,
		DeleteIconHoverDirective,
		ProductTotalQuantityComponent,
		ProductTotalPriceComponent,
		ShoppingCartModalDirective,
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		ProductsHttpService, 
		StorageService,
		ShoppingCartStateService,
		ShoppingCartService, 
		ShoppingCartModalService,
		FixPricePipe],
	bootstrap: [AppComponent]
})
export class AppModule { }
