import { UserService } from './../../services/user-service/user.service';
import { UserInfo } from './../../models/user-info';
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
  userInfo: UserInfo;

  showUpdatePannel: boolean;

  updateTypeInput: string;
  updateNameInput: string;
  updateLeftSidePriceInput: number;
  updateRightSidePriceInput: number;
  updateId: number;
  updateStatus: string;

  createTypeInput: string;
  createNameInput: string;
  createLeftSidePriceInput: number;
  createRightSidePriceInput: number;

  constructor(private foodService: FoodService, private userService: UserService) {
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

  setFoodType(type: string): void {
    this.updateTypeInput = type;
  }

  setFoodTypeForCreate(type: string): void {
    this.createTypeInput = type;
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

    if (this.updateTypeInput === '' || this.updateTypeInput == null) {
      alert('Empty type field !');
      return;
    }

    if (this.updateNameInput === '' || this.updateNameInput == null) {
      alert('Empty name field !');
      return;
    }

    if (this.updateLeftSidePriceInput < 0 || this.updateLeftSidePriceInput == null) {
      alert('Wrong price !');
      return;
    }

    if (this.updateRightSidePriceInput < 0 || this.updateRightSidePriceInput >= 100
      || this.updateRightSidePriceInput == null) {
      alert('Wrong price !');
      return;
    }

    this.foodService.HttpUpdateFood(updatingFood).subscribe(e => {
      console.log(e);
    });
    this.back();
  }

  deleteFood(food: Food): void {
    this.foodService.HttpDeleteFood(food).subscribe();
  }

  backForCreate(): void {
    this.createTypeInput = null;
    this.createNameInput = null;
    this.createLeftSidePriceInput = null;
    this.createRightSidePriceInput = null;
  }

  saveForCreate(): void {
    let connectPrice: string;
    if (this.createRightSidePriceInput < 10) {
      connectPrice = this.createLeftSidePriceInput + '.' + '0' + this.createRightSidePriceInput;
    } else {
      connectPrice = this.createLeftSidePriceInput + '.' + this.createRightSidePriceInput;
    }

    const creatingFood: Food = {
      id: null,
      name: this.createNameInput,
      price: connectPrice,
      status: 'dostepny',
      type: this.createTypeInput
    };

    if (this.createTypeInput === '' || this.createTypeInput == null) {
      alert('Empty type field !');
      return;
    }

    if (this.createNameInput === '' || this.createNameInput == null) {
      alert('Empty name field !');
      return;
    }

    if (this.createLeftSidePriceInput < 0 || this.createLeftSidePriceInput == null) {
      alert('Wrong price !');
      return;
    }

    if (this.createRightSidePriceInput < 0 || this.createRightSidePriceInput >= 100
      || this.createRightSidePriceInput == null) {
      alert('Wrong price !');
      return;
    }

    this.foodService.HttpCreateFood(creatingFood).subscribe(e => {
      console.log(e);
    });
    this.back();
  }
}
