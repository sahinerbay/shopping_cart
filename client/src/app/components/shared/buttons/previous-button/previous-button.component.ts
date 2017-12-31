import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-previous-button',
	templateUrl: './previous-button.component.html',
	styleUrls: ['./previous-button.component.scss']
})
export class PreviousButtonComponent {

	@Input() previousRoute: string;
	@Input() content: string;

}