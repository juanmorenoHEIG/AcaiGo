import { ProductResponse } from "./product";

export class OrderLinesFullResponse {
  _id: String;
  product: ProductResponse;
  quantity: number;


constructor(product, quantity){
    this.product = product;
    this.quantity = quantity;
  }
}