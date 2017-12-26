import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[appModal]'
})
export class ModalDirective {

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	@HostListener('document:click', ['$event.target'])
	public onClick(targetElement) {
		console.log(targetElement)
		if(targetElement.classList.contains('product__button')) {
			console.log('clicked')
		}
	}

}
