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

	toggleModal(): void {
		if(this.isModalActive.value === true) {
			this.setModalInactive();
		} else {
			this.setModalActive();
		}
	}

	getModalActivity(): Observable<boolean> {
		return this.isModalActive.asObservable();
	}

}
