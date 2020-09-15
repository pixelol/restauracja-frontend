import { HttpClient, HttpHeaders, HttpParams, XhrFactory } from '@angular/common/http';
import { UserInfo } from '../../models/user-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userRoleObs = new BehaviorSubject<UserInfo>(null);

  constructor(private http: HttpClient) {
    this.httpGetUsers().subscribe(e => {
      this.userRoleObs.next(e);
    });
  }

  httpGetUsers(): Observable<any> {
    return this.http.get<any>('/api/userinfo');
  }
}
