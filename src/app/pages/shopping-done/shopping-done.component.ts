import { LoggerService } from './../../services/logger-service/logger.service';
import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { UserInfo } from './../../models/user-info';
import { UserService } from './../../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-shopping-done',
  templateUrl: './shopping-done.component.html',
  styleUrls: ['./shopping-done.component.css']
})
export class ShoppingDoneComponent implements OnInit {

  foods: Array<Food> = [];
  price = '0.00';

  userInfo: UserInfo;

  constructor(private userService: UserService, private loggerService: LoggerService) {
    userService.userRoleObs.subscribe(e => {
      this.userInfo = e;
    });
    loggerService.foods.subscribe(e => {
      this.foods = e;
    });
    loggerService.price.subscribe(e => {
      this.price = e;
    });

  }

  ngOnInit(): void {
  }

}
