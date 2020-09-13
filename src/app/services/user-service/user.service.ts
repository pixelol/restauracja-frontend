import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../../models/user-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userRoleObs = new BehaviorSubject<UserInfo>(null);

  constructor(private http: HttpClient) {
    // this.httpGetUser().subscribe(e => {
    //   this.userRoleObs.next(e);
    //   console.log(e);
    // });
  }

  httpGetUser(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/userinfo');
  }

  httpGetUserTest(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/userinfo');
  }

}