import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  foods = new BehaviorSubject<Array<Food>>([]);
  price = new BehaviorSubject<string>('0.00');

  constructor() { }
}
