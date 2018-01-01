import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoadingModalService {

	constructor() { }

	private isLoading = new BehaviorSubject<boolean>(false);

	setLoading(status: boolean) {
		this.isLoading.next(status)
	}

	getLoadingStatus(): Observable<boolean> {
		return this.isLoading.asObservable();
	}
}
