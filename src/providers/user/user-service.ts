import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserServiceProvider {

  apiUrl = 'https://comem-webserv-2018-2019-b.herokuapp.com/users';

  constructor(public http: HttpClient) {
    console.log('Hello  Provider');
  }

}
