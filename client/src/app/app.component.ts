import { Component, OnInit, DoCheck   } from '@angular/core';
import { routerTransition } from './_animations/router.animation';
import { Router, Event } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [ routerTransition ],
})
export class AppComponent   {

	constructor(private router: Router) {}

	getState(outlet) {
		return outlet.activatedRouteData.state;
	 }

}
