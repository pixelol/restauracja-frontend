import { element } from 'protractor';
import { FoodService } from './../../services/food-service/food.service';
import { ShoppingHistory } from './../../models/shopping-history';
import { Food } from './../../models/food';
import { LoggerService } from './../../services/logger-service/logger.service';
import { ShoppingCartService } from './../../services/shopping-cart-service/shopping-cart.service';
import { PaypalService } from './../paypal-service/paypal.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit, AfterViewChecked {

  price: string;

  addScript: boolean;
  paypalConfig = {
    createOrder: (data, actions) => {
      // This function sets up the details of the transaction, including the amount and line item details.
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: this.price
          }
        }]
      });
    },
    onApprove: (data, actions) => {
      // This function captures the funds from the transaction.
      return actions.order.capture().then((details) => {
        // This function shows a transaction success message to your buyer.

        let saveFood = '';
        const savePrice = this.shoppingCartService.price.getValue();

        this.shoppingCartService.foods.subscribe(e => {
          const food: Food[] = e;
          food.forEach(signleElement => {
            saveFood += signleElement.name + ',';
          });
        });

        const singleHistory: ShoppingHistory = { id: 0, food: saveFood, price: savePrice };
        this.loggerService.httpCreateShoppingHistory(singleHistory).subscribe();

        this.shoppingCartService.foods.subscribe(e => {
          const food: Array<Food> = e;
          food.forEach(signleElement => {
            signleElement.status = 'kupiony';
            this.foodService.HttpUpdateFood(signleElement).subscribe();
          });
        });

        this.shoppingCartService.foods.next([]);
        this.shoppingCartService.price.next('0.00');

        alert('Transaction completed');
      });
    }
  };

  // tslint:disable-next-line:max-line-length
  constructor(private paypalService: PaypalService, private shoppingCartService: ShoppingCartService, private loggerService: LoggerService, private foodService: FoodService) {
    this.addScript = false;
    shoppingCartService.price.subscribe(e => {
      this.price = e;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    if (!this.addScript /*&& this.paypalService.clientIdObs != null*/) {
      this.addPaypalScript().then(() => {
        paypal.Buttons(this.paypalConfig).render('#paypal-button-container');
      });
    }
  }

  addPaypalScript(): any {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script'); // <script src =""></script>
      scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=' +
        '' +
        '&currency=PLN'; /* <=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=# USUŃ */
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }


}
