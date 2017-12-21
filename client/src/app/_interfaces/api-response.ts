import { Products } from './products';

export interface ApiResponse {
	status: string,
	message: string,
	data: Array<Products>
}
