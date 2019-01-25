import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderResponse} from '../../models/order';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the CommandeListeUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommandeListeUserProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello CommandeListeUserProvider Provider');
  }

  getProdListe(userId): Observable<OrderResponse> {
    return this.httpClient.get<OrderResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users/'+userId+'/orders');
  }

}
