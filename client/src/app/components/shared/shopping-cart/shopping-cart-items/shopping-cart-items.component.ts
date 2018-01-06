import { Component, Input, ContentChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef   } from '@angular/core';
import { Cart } from '@app/_interfaces/cart';
import { SlideToggleAnimation } from '@app/_animations/slideToggle.animation';
import { ShoppingCartStateService } from '@app/_services/shopping-cart/shopping-cart-state.service';

@Component({
	selector: 'app-shopping-cart-items',
	templateUrl: './shopping-cart-items.component.html',
	styleUrls: ['./shopping-cart-items.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [SlideToggleAnimation],
	host: { '[@slideState]': '' },
	
})
export class ShoppingCartItemsComponent {

	constructor(private cd: ChangeDetectorRef, private shoppingCartStateService: ShoppingCartStateService) {}

	private isRemoved: boolean = false;
	private state: string = 'hide'

	@ContentChild(TemplateRef) templateRef: TemplateRef<any>;

	@Input() productsItems: Cart;

	onRemove(isRemoved:boolean) {
		this.isRemoved = isRemoved;
		
	}

	trackByProductId(index: number, product: any): string {
		return product._id;
  }

}
