export interface Cart {
	_id: string,
	title: string
	unitPrice: number,
	imagePath: {
		mobile: string,
		desktop: string
	},
	totalPrice?: number,
	quantity?: number,
}