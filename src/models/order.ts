import { OrderLinesResponse } from './orderLines';
import { pickupPlaceResponse } from './pickupPlace';


export class OrderResponse {
  pickup_place: pickupPlaceResponse[];
  _id: string;
  pickup_date: string;
  state: string;
  orderLines: OrderLinesResponse[];

  constructor(){
    this.orderLines = []
  }
}

