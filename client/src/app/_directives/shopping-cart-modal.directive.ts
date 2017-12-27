import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ShoppingCartModalService } from './../_services/shopping-cart-modal.service';

@Directive({
	selector: '[appShoppingCartModal]'
})
export class ShoppingCartModalDirective {

	constructor(private shoppingCartModalService: ShoppingCartModalService, private elRef: ElementRef, private renderer: Renderer2) { }

	@HostListener('document: click', ['$event.target']) onclick(event) {
		if(event.className === "modal" || event.className === "fa fa-times modal__content__close") {
			this.shoppingCartModalService.setModalInactive();
		}
	}
}
