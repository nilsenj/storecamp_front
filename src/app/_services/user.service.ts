import {Injectable, Inject, EventEmitter} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../_models/';

@Injectable()
export class UserService {
  public token: string;
  userEvent: EventEmitter<any> = new EventEmitter();

  constructor(
        @Inject(Http) private http: Http
    ) {
    // set token if saved in local storage
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
  login(email: string, password: string): Observable<boolean> {
    return this.http.post('http://storecamp.io/api/authenticate', {email: email, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          this.userEvent.emit(response.json());

          // store email and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }
  register(name: string, email: string, password: string): Observable<boolean> {
    return this.http.post('http://storecamp.io/api/register', {name: name, email: email, password: password })
      .map((response: Response) => {
        // register successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          this.userEvent.emit(response.json());

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }
  getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://storecamp.io//api/users', options)
            .map((response: Response) => response.json());
  }

  getAuthenticatedUser(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.post('http://storecamp.io//api/getUser',null, options)
      .map((response: Response) => response.json());
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.userEvent.emit(null);

  }
}
