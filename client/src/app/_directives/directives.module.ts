import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteIconHoverDirective } from '@app/_directives/delete-icon-hover.directive';
import { ShoppingCartModalDirective } from '@app/_directives/shopping-cart-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
	DeleteIconHoverDirective,
	ShoppingCartModalDirective
  ],
  exports: [
	DeleteIconHoverDirective,
	ShoppingCartModalDirective
  ]
})
export class DirectivesModule { }
