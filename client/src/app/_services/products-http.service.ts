import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../environments/environment';
import { Cart } from './../_interfaces/cart';

@Injectable()
export class ProductsHttpService {

	constructor(private http: HttpClient) { }

	private url: string = environment.API_URI;

	getProducts(): Observable<any> {
		return this.http.get(this.url);
	}

}
