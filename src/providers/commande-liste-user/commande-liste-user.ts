import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeListeUserM} from '../../models/commandeListeUser';
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

  getProdListe(userId): Observable<CommandeListeUserM> {
    return this.httpClient.get<CommandeListeUserM>('https://comem-webserv-2018-2019-b.herokuapp.com/users/'+userId+'/orders');
  }

}
