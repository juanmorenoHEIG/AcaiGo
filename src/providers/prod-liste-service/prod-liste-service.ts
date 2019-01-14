import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProdListeResponse} from '../../models/prodliste';
import { Observable } from 'rxjs/Rx';


/*
  Generated class for the ProdListeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdListeServiceProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello ProdListeServiceProvider Provider');
  }

  getProdListe(): Observable<ProdListeResponse> {
    return this.httpClient.get<ProdListeResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/products');
  }
}
