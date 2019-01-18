import { OrderLinesResponse } from './orderLines';
import { pickupPlaceResponse } from './pickupPlace';


export class OrderResponse {
  pickup_place: pickupPlaceResponse[];
  _id: String;
  pickup_date: Date;
  state: String;
  orderLines: OrderLinesResponse[];

  constructor(){
    this.orderLines = []
  }
}

