import { OrderLinesFullResponse } from './orderLineFull';
import { pickupPlaceResponse } from './pickupPlace';


export class OrderFullResponse {
  pickup_place: pickupPlaceResponse;
  _id: string;
  pickup_date: string;
  state: string;
  orderLines: OrderLinesFullResponse[];

  constructor(){
    this.orderLines = []
  }
}
