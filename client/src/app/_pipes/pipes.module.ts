import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsPipe } from '@app/_pipes/';
import { FixPricePipe } from '@app/_pipes/';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FixPricePipe,
		ItemsPipe
	],
	providers: [
		FixPricePipe,
		ItemsPipe
	],
	exports: [
		FixPricePipe,
		ItemsPipe
	]
})
export class PipesModule { }
