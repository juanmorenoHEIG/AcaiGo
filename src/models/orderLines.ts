export class OrderLinesResponse {
  _id: String;
  productId: String;
  quantity: number;

  constructor(productId, quantity){
    this.productId = productId;
    this.quantity = quantity;
  }
}
