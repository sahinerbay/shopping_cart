import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ShoppingCartModalService {

	private isModalActive = new BehaviorSubject<boolean>(false);

	setModalActive(): void {
		this.isModalActive.next(true);
	}

	setModalInactive(): void {
		this.isModalActive.next(false);
	}

	getModalActivity(): Observable<boolean> {
		return this.isModalActive.asObservable();
	}

}
