import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';


import { UserResponse } from '../../models/user-response';
import {ProdListeResponse} from "../../models/prodliste";


@Injectable()
export class UserServiceProvider {

  apiUrl = 'https://comem-webserv-2018-2019-b.herokuapp.com/users';

  constructor(public httpClient: HttpClient) {
    console.log('Hello  Provider');
  }


/*  addUser(): Observable<UserResponse> {
/!*    const requestBody = {
      data:
    }*!/
    return this.httpClient.post<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users', );
  }*/

}
