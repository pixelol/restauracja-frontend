import { ShoppingHistory } from './../../models/shopping-history';
import { LoggerService } from './../../services/logger-service/logger.service';
import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { UserInfo } from './../../models/user-info';
import { UserService } from './../../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-done',
  templateUrl: './shopping-done.component.html',
  styleUrls: ['./shopping-done.component.css']
})
export class ShoppingDoneComponent implements OnInit {

  shoppingHistory: Array<ShoppingHistory> = [];

  userInfo: UserInfo;

  constructor(private userService: UserService, private loggerService: LoggerService) {
    userService.userRoleObs.subscribe(e => {
      this.userInfo = e;
    });
    loggerService.httpGetAllShoppingHistory().subscribe(e => {
      this.shoppingHistory = e;
      console.log(this.shoppingHistory);
    });

  }

  ngOnInit(): void {
  }

  deleteFromHistory(shoppingHistory: ShoppingHistory): void {
    this.loggerService.httpDeleteShoppingHistory(shoppingHistory).subscribe();
  }

}
