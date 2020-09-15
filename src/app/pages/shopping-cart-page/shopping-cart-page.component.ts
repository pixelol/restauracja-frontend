import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { Food } from './../../models/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

  foods: Array<Food>;
  price: string;

  constructor(private shoppingCartService: ShoppingCartService) {
    shoppingCartService.foods.subscribe(e => {
      this.foods = e;
    });
    shoppingCartService.price.subscribe(e => {
      this.price = e;
    });
  }

  ngOnInit(): void {
  }

  removeFoodFromShoppingCart(food: Food): void {
    this.shoppingCartService.removeFoodFromShoppingCart(food);
  }

  subtractTwoNumbers(firstNumber: string, secondNumber: string): string {

    const firstNumberSplitted = firstNumber.split('.', 2);
    const secondNumberSplitted = secondNumber.split('.', 2);

    const firstNumberSplittedValue: number[] = [];
    const secondNumberSplittedValue: number[] = [];

    firstNumberSplittedValue[0] = +firstNumberSplitted[0];
    firstNumberSplittedValue[1] = +firstNumberSplitted[1];
    secondNumberSplittedValue[0] = +secondNumberSplitted[0];
    secondNumberSplittedValue[1] = +secondNumberSplitted[1];

    let leftPartSubtract: number;
    let rightPartSubtract: number;

    if (secondNumberSplittedValue[1] > firstNumberSplittedValue[1]) {
      firstNumberSplittedValue[0] -= 1;
      firstNumberSplittedValue[1] += 100;

      leftPartSubtract = firstNumberSplittedValue[0] - secondNumberSplittedValue[0];
      rightPartSubtract = firstNumberSplittedValue[1] - secondNumberSplittedValue[1];
    } else {
      leftPartSubtract = firstNumberSplittedValue[0] - secondNumberSplittedValue[0];
      rightPartSubtract = firstNumberSplittedValue[1] - secondNumberSplittedValue[1];
    }

    let finalLeftPart: string;
    let finalRightPart: string;

    finalLeftPart = leftPartSubtract + '';
    if (rightPartSubtract < 10) {
      finalRightPart = '0' + rightPartSubtract;
    } else {
      finalRightPart = rightPartSubtract + '';
    }

    console.log(finalLeftPart + '.' + finalRightPart);
    return;
  }

}
