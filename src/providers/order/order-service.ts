import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {UserResponse} from "../../models/user-response";
import { OrderResponse } from "../../models/order";


@Injectable()
export class OrderServiceProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello ProdListeServiceProvider Provider');
  }


  pushOrder(order): Observable<OrderResponse> {
          return this.httpClient.post<OrderResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/orders', order);
  }
}
