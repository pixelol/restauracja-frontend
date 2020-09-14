import { Food } from './../../models/food';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  foods = new BehaviorSubject<Array<Food>>([]);
  price = new BehaviorSubject<number>(0);

  constructor() { }

  checkIfFoodInShoppingCart(food: Food): boolean {
    let validation = false;
    this.foods.getValue().find(e => {
      if (food.id === e.id) {
        validation = true;
      }
    });
    return validation;
  }

  addFoodToShoppingCart(food: Food): void {
    const updateShoppingCart: Array<Food> = this.foods.getValue();
    const updatePrice: number = this.price.getValue();

    if (!this.checkIfFoodInShoppingCart(food)) {
      updateShoppingCart.push(food);
      this.foods.next(updateShoppingCart);
      this.price.next(updatePrice + +food.price);
    }
  }

  removeFoodFromShoppingCart(food: Food): void {
    const updatePrice: number = this.price.getValue();

    this.foods.next(this.foods.getValue().filter(e => {
      if (food.id !== e.id) {
        return true;
      } else {
        this.price.next(updatePrice - +food.price);
      }
    }));
  }
}
