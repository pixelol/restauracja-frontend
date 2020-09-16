import { ShoppingHistory } from './../../models/shopping-history';
import { LoggerService } from './../../services/logger-service/logger.service';
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

  userInfo: UserInfo;

  constructor(private userService: UserService, private loggerService: LoggerService) {
    userService.userRoleObs.subscribe(e => {
      this.userInfo = e;
    });
  }

  ngOnInit(): void {
  }

}
