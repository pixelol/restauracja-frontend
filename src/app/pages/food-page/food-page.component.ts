import { Food } from './../../models/food';
import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { User } from './../../models/user';
import { FoodService } from './../../services/food-service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  foods: Array<User>;

  constructor(private foodService: FoodService, private shoppingCartService: ShoppingCartService) { }

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

  addToShoppingCart(food: Food): void {
    this.shoppingCartService.addFoodToShoppingCart(food);
    console.log(this.shoppingCartService.foods.getValue());
  }

}
