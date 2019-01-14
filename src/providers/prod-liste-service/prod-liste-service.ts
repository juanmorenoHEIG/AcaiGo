import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProdListeResponse} from '../../models/prodliste-response';

/*
  Generated class for the ProdListeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdListeServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProdListeServiceProvider Provider');
  }

/*  getProdListe(): Observable<ProdListeResponse> {
    return this.httpClient
      .get<ProdListeResponse>('https://api.icndb.com/jokes/random')
  }*/
}
