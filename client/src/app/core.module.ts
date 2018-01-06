import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*SERVICES*/
import { ProductsHttpService } from '@app/_services/products-http.service';
import { StorageService } from '@app/_services/storage.service';
import { ShoppingCartService } from '@app/_services/shopping-cart/shopping-cart.service';
import { ShoppingCartModalService } from '@app/_services/shopping-cart/shopping-cart-modal.service';
import { ShoppingCartStateService } from '@app/_services/shopping-cart/shopping-cart-state.service';
import { LoadingModalService } from '@app/_services/loading-modal.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	declarations: [

	],
	providers: [
		ProductsHttpService,
		StorageService,
		ShoppingCartStateService,
		ShoppingCartService,
		ShoppingCartModalService,
		LoadingModalService,
	],
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}
}
