/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutRoutingModule} from './_routes/checkout-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

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
import { ShoppingCartTitleComponent } from './components/shared/shopping-cart/shopping-cart-title/shopping-cart-title.component';
import { ShoppingCartTotalPriceComponent } from './components/shared/shopping-cart/shopping-cart-total-price/shopping-cart-total-price.component';
import { ShoppingCartEmptyComponent } from './components/shared/shopping-cart/shopping-cart-empty/shopping-cart-empty.component';
import { CheckoutButtonComponent } from './components/shared/buttons/checkout-button/checkout-button.component';
import { ShoppingCartItemsComponent } from './components/shared/shopping-cart/shopping-cart-items/shopping-cart-items.component';
import { QuantityButtonComponent } from './components/shared/buttons/quantity-button/quantity-button.component';
import { NextButtonComponent } from './components/shared/buttons/next-button/next-button.component';
import { ShippingComponent } from './components/pages/checkout/shipping/shipping.component';
import { PreviousButtonComponent } from './components/shared/buttons/previous-button/previous-button.component';
import { ShoppingCartStepsComponent } from './components/shared/shopping-cart/shopping-cart-steps/shopping-cart-steps.component';

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
		ShoppingCartTitleComponent,
		ShoppingCartTotalPriceComponent,
		ShoppingCartEmptyComponent,
		CheckoutButtonComponent,
		ShoppingCartItemsComponent,
		QuantityButtonComponent,
		NextButtonComponent,
		ShippingComponent,
		PreviousButtonComponent,
		ShoppingCartStepsComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CheckoutRoutingModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule
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
