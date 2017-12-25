export interface Cart {
	product_id: string,
	title: string
	unitPrice: number,
	imagePath: string,
	totalPrice?: number,
	quantity?: number,
}
