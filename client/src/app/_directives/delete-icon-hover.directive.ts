import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[appDeleteIconHover]'
})
export class DeleteIconHoverDirective {

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	@HostListener('mouseenter', ['$event.target']) onmouseenter() {
		this.hover('.5');
	}

	@HostListener('mouseleave', ['$event.target']) onmouseleave() {
		this.hover('1');
	}

	hover(opacity) {
		const parent = this.renderer.parentNode(this.elRef.nativeElement);
		this.renderer.setStyle(parent, "opacity", opacity)
	}

}
