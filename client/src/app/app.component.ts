import { Component } from '@angular/core';
import { routerTransition } from './_animations/router.animation';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [ routerTransition ],
})
export class AppComponent {
	title = 'app';
	constructor() { }

	getState(outlet) {
		return outlet.activatedRouteData.state;
	 }

}
