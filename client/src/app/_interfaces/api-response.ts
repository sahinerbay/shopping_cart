import { Cart } from './cart';

export interface ApiResponse {
	status: string,
	message: string,
	data: Array<Cart>
}