import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ShoppingCartModalService } from './../_services/shopping-cart/shopping-cart-modal.service';

@Directive({
	selector: '[appShoppingCartModal]'
})
export class ShoppingCartModalDirective {

	constructor(private shoppingCartModalService: ShoppingCartModalService, private elRef: ElementRef, private renderer: Renderer2) { }

	@HostListener('document: click', ['$event.target']) onclick(event) {
		if(event.className === "shopping-cart-modal" || event.className === "fa fa-times shopping-cart-modal__content__header__close" || event.tagName === "APP-ROOT" || event.tagName === "APP-PRODUCT") {
			this.shoppingCartModalService.setModalInactive();
		}
	}
}
