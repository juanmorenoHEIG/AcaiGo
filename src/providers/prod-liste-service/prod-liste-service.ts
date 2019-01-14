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

<<<<<<< HEAD
/*  getProdListe(): Observable<ProdListeResponse> {
    return this.httpClient
      .get<ProdListeResponse>('https://api.icndb.com/jokes/random')
  }*/
=======
  getProdListe(): Observable<ProdListeResponse> {
    return this.httpClient.get<ProdListeResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/products');
  }
>>>>>>> 76799aa56abf6f634255da5cb6f3777c7a8adc1e
}
