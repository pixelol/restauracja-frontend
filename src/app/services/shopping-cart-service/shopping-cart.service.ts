import { Food } from './../../models/food';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  foods = new BehaviorSubject<Array<Food>>([]);
  price = new BehaviorSubject<string>('0.00');

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
    const oldShoppingCart: Array<Food> = this.foods.getValue();
    const oldPrice: string = this.price.getValue();
    const sum = this.addTwoNumbers(oldPrice, food.price);

    if (!this.checkIfFoodInShoppingCart(food)) {
      oldShoppingCart.push(food);
      this.foods.next(oldShoppingCart);
      this.price.next(sum);
    }
  }

  removeFoodFromShoppingCart(food: Food): void {
    const oldPrice: string = this.price.getValue();

    this.foods.next(this.foods.getValue().filter(e => {
      if (food.id !== e.id) {
        return true;
      } else {
        this.price.next(oldPrice + food.price);  // <======= zamień + na - i stworz funkcje do odejmowania
      }
    }));
  }

  addTwoNumbers(firstNumber: string, secondNumber: string): string {

    const firstNumberSplitted = firstNumber.split('.', 2);
    const secondNumberSplitted = secondNumber.split('.', 2);

    let leftPart = +firstNumberSplitted[0] + +secondNumberSplitted[0];
    let rightPart = +firstNumberSplitted[1] + +secondNumberSplitted[1];

    let finalLeftPart: string;
    let finalRightPart: string;

    if (rightPart >= 100) {
      leftPart += 1;
      rightPart -= 100;
      finalLeftPart = leftPart + '';

      if (rightPart < 10) {
        finalRightPart = '0' + rightPart;
      } else {
        finalRightPart = rightPart + '';
      }
    } else {
      finalLeftPart = leftPart + '';
      if (rightPart < 10) {
        finalRightPart = '0' + rightPart;
      } else {
        finalRightPart = rightPart + '';
      }
    }

    return finalLeftPart + '.' + finalRightPart;
  }
}
