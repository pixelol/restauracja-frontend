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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
