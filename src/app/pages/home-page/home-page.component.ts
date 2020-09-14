import { User } from './../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './../../services/user-service/user.service';
import { UserInfo } from '../../models/user-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user: UserInfo;
  number1 = 4;
  number2 = 5;

  constructor(private userService: UserService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  test(): any {
    this.httpGetUserTest().subscribe(e => {
      console.log(e);
    });
  }

  test2(): any {
    const headers = new HttpHeaders()
            .set("X-CustomHeader", "custom header value");


    return this.http.get('http://localhost:8080/api/userinfo', { headers });
  }

httpGetUserTest(): any {
  return this.http.get<any>('http://localhost:8080/api/userinfo');
}

httpGetUserTest2(): any {
  const user = {
    id: 4, name: 'test', surname: 'test', login: 'test', password: 'test', role: 'test', active: 1
  };
  return this.http.post<any>('http://localhost:8080/api/user', user);
}

}
