import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { UserResponse } from '../../models/user-response';


@Injectable()
export class UserServiceProvider {

<<<<<<< HEAD
  apiUrl = 'https://comem-webserv-2018-2019-b.herokuapp.com/users';

=======
>>>>>>> 53a951d7a38ea4507eefee54e31345395d4a0284
  constructor(public httpClient: HttpClient) {
    console.log('Hello  Provider');
  }


  addUser(register): Observable<UserResponse> {
/*    const requestBody = {
      data:
    }*/
    return this.httpClient.post<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users', register);
  }

  getProdListe(): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/Users/');
  }
}
