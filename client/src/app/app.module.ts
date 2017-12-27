/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

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
import { LogoComponent } from './components/header/logo/logo.component';
import { ShoppingCartComponent } from './components/header/shopping-cart/shopping-cart.component';
import { ShoppingCartModalComponent } from './components/header/shopping-cart/shopping-cart-modal/shopping-cart-modal.component';
/*COMPONENTS-PAGES*/
import { HomeComponent } from './components/pages/home/home.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
/*COMPONENTS-SHARED*/
import { AddButtonComponent } from './components/shared/buttons/add-button/add-button.component';
import { RemoveButtonComponent } from './components/shared/buttons/remove-button/remove-button.component';
import { ProductImageComponent } from './components/shared/product/product-image/product-image.component';
import { ProductPriceComponent } from './components/shared/product/product-price/product-price.component';
import { ProductTitleComponent } from './components/shared/product/product-title/product-title.component';
import { ProductTotalQuantityComponent } from './components/shared/product/product-total-quantity/product-total-quantity.component';
import { ProductTotalPriceComponent } from './components/shared/product/product-total-price/product-total-price.component';

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
		DeleteIconHoverDirective,
		ProductTotalQuantityComponent,
		ProductTotalPriceComponent,
		ShoppingCartModalDirective,
		HomeComponent,
		RemoveButtonComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
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
