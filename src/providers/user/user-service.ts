import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserResponse } from '../../models/user-response';


@Injectable()
export class UserServiceProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello  Provider');
  }


  addUser(register): Observable<UserResponse> {
/*    const requestBody = {
      data:
    }*/
    return this.httpClient.post<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users', register);
  }

  patchImageProfil(imgUrl, userId): Observable<UserResponse> {

        return this.httpClient.patch<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users/'+userId, imgUrl);
      }

  patchEmail(newEmail, userId):Observable<UserResponse>{
    return this.httpClient.patch<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users/'+userId, newEmail);
  }

  deleteUser(userId)
  {
    return this.httpClient.delete<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/users/'+userId);
  }

  getProdListe(): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>('https://comem-webserv-2018-2019-b.herokuapp.com/Users/');
  }
}
