import { FoodService } from './../../services/food-service/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  foods: Array<Food>;

  showUpdatePannel: boolean;

  updateTypeInput: string;
  updateNameInput: string;
  updateLeftSidePriceInput: number;
  updateRightSidePriceInput: number;
  updateId: number;
  updateStatus: string;

  constructor(private foodService: FoodService) { }

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

  setFoodType(type: string): void {
    this.updateTypeInput = type;
  }

  updateFood(food: Food): void {
    const priceSplitted = food.price.split('.', 2);

    this.updateTypeInput = food.type;
    this.updateNameInput = food.name;
    this.updateLeftSidePriceInput = +priceSplitted[0];
    this.updateRightSidePriceInput = +priceSplitted[1];
    this.updateId = food.id;
    this.updateStatus = food.status;

    this.showUpdatePannel = true;
  }

  back(): void {
    this.updateTypeInput = null;
    this.updateNameInput = null;
    this.updateLeftSidePriceInput = null;
    this.updateRightSidePriceInput = null;
    this.updateId = null;
    this.updateStatus = null;

    this.showUpdatePannel = false;
  }

  save(): void {
    let connectPrice: string;
    if (this.updateRightSidePriceInput < 10) {
      connectPrice = this.updateLeftSidePriceInput + '.' + '0' + this.updateRightSidePriceInput;
    } else {
      connectPrice = this.updateLeftSidePriceInput + '.' + this.updateRightSidePriceInput;
    }

    const updatingFood: Food = {
      id: this.updateId,
      name: this.updateNameInput,
      price: connectPrice,
      status: this.updateStatus,
      type: this.updateTypeInput
    };

    this.foodService.HttpUpdateFood(updatingFood).subscribe(e => {
      console.log(e);
    });
    this.back();
  }

  deleteFood(food: Food): void {
    this.foodService.HttpDeleteFood(food).subscribe();
  }

}
