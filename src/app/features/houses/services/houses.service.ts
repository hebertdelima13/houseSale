import { Injectable } from '@angular/core';
import { Houses } from '../models/houses';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { }

  houses: Array<Houses> = [
    {
      id: 1,
      name: 'T2',
      address: 'Lisboa',
      desc: 'T2 localizado em lisboa',
      price: 500,
      inclusionDate: new Date()
    },
  ];


  getHouses() {
    return this.houses;
  }
}

