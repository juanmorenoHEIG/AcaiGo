export class OrderLinesResponse {
  _id: Number;
  productId: String;
  quantity: Number;

  constructor(productId){
    this.productId = productId
  }
}
