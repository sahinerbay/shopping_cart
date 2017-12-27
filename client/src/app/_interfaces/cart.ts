export interface Cart {
	product_id: string,
	title: string
	unitPrice: number,
	imagePath: {
		mobile: string,
		desktop: string
	},
	totalPrice?: number,
	quantity?: number,
}
