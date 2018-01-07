import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/publishReplay';
import { environment } from './../../environments/environment';

@Injectable()
export class ProductsHttpService {

	constructor(private http: HttpClient) { }

	private url: string = 'https://moodyfoody.herokuapp.com/api/products';

	getProducts(): Observable<any> {
		return this.http.get(this.url).publishReplay(1).refCount();
	}
}