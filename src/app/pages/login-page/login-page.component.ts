import { UserService } from './../../services/user-service/user.service';
import { UserInfo } from './../../models/user-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userInfo: UserInfo;

  constructor(private userService: UserService) {
    userService.userRoleObs.subscribe(e => {
      this.userInfo = e;
    });
  }

  ngOnInit(): void {
    if (!this.userInfo) {
      window.location.href = 'http://localhost:8080/login';
    }
  }

}
