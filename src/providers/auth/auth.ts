import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { delayWhen, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { User } from '../../models/user';

/**
 * Authentication service for login/logout.
 */
let apiUrl = 'https://comem-webserv-2018-2019-b.herokuapp.com/api';

@Injectable()
export class AuthProvider {

  private auth$: Observable<AuthResponse>;
  private authSource: ReplaySubject<AuthResponse>;

  constructor(private http: HttpClient, private storage: Storage) {
    
      this.authSource = new ReplaySubject(1);
      this.auth$ = this.authSource.asObservable();
    
      // TODO: load the stored authentication response from storage when the app starts.
      this.storage.get('login').then(auth => {
        // Push the loaded value into the observable stream.
        this.authSource.next(auth);
      });
    }

  isAuthenticated(): Observable<boolean> {
    return this.auth$.pipe(map(auth => !!auth));
  }

  getUser(): Observable<User> {
    return this.auth$.pipe(map(auth => auth ? auth.user : undefined));
  }

  getToken(): Observable<string> {
    return this.auth$.pipe(map(auth => auth ? auth.token : undefined));
  }

  logIn(authRequest: AuthRequest): Observable<AuthResponse> {

    const authUrl = 'https://comem-webserv-2018-2019-b.herokuapp.com/login';//'https://comem-travel-log-api.herokuapp.com/api/auth';
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      delayWhen(auth=> {
        return this.saveAuth(auth);
      }),
      map(auth => {
        this.authSource.next(auth);
        console.log(`User ${auth.user.name} logged in`);
        return auth;
      })
    );
  }

  logOut() {
    this.authSource.next(null);
    // TODO: remove the stored authentication response from storage when logging out.
    this.storage.remove('login');
    console.log('User logged out');
  }

  private saveAuth(auth: AuthResponse): Observable<void> {
    return Observable.fromPromise(this.storage.set('login', auth));
  }



}
