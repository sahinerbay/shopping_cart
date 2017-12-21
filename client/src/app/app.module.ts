/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/*SERVICES*/
import { ProductsHttpService } from './_services/products-http.service';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/products-list/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/shared/add-button/add-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ShoppingCartComponent } from './components/header/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    HeaderComponent,
    AddButtonComponent,
    LogoComponent,
    ShoppingCartComponent,
  ],
  imports: [
	 BrowserModule,
	 HttpClientModule
  ],
  providers: [ProductsHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
