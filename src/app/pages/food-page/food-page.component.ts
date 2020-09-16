import { UserService } from './../../services/user-service/user.service';
import { UserInfo } from './../../models/user-info';
import { Food } from './../../models/food';
import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { FoodService } from './../../services/food-service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  foods: Array<Food>;
  userInfo: UserInfo;

  constructor(private foodService: FoodService, private shoppingCartService: ShoppingCartService, private userService: UserService) {
    userService.userRoleObs.subscribe(e => {
      this.userInfo = e;
    });
  }

  ngOnInit(): void {
  }

  getFoodByTypeBreakfast(): any {
    const type = 'breakfast';
    this.foodService.HttpGetFoodByType(type).subscribe(e => {
      this.foods = e;
    });
  }

  getFoodByTypeDinner(): any {
    const type = 'dinner';
    this.foodService.HttpGetFoodByType(type).subscribe(e => {
      this.foods = e;
    });
  }

  getFoodByTypeSupper(): any {
    const type = 'supper';
    this.foodService.HttpGetFoodByType(type).subscribe(e => {
      this.foods = e;
    });
  }

  addFoodToShoppingCart(food: Food): void {
    this.shoppingCartService.addFoodToShoppingCart(food);
    console.log(this.shoppingCartService.foods.getValue());
  }

  checkIfFoodInShoppingCart(food: Food): boolean {
    return this.shoppingCartService.checkIfFoodInShoppingCart(food);
  }

}
