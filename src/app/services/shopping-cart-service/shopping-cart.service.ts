import { Food } from './../../models/food';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  foods = new BehaviorSubject<Array<Food>>([]);

  constructor() { }

  addFoodToShoppingCart(food: Food): void {
    const updateShoppingCart: Array<Food> = this.foods.getValue();

    if (!updateShoppingCart.find(e => food.id === e.id)) {
      updateShoppingCart.push(food);
      this.foods.next(updateShoppingCart);
    }
  }

  removeFoodFromShoppingCart(food: Food): void {
    
  }
}
