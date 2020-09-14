import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../../models/user-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userRoleObs = new BehaviorSubject<UserInfo>(null);

  constructor(private http: HttpClient) { }

  httpGetUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/user');
  }

}
