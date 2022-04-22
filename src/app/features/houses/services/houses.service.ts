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
      name: 'T2 em Lisboa',
      address: 'Lisboa',
      desc: '200m² | T2 | 3º andar',
      price: 500,
      img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 2,
      name: 'T3 no Porto',
      address: 'Porto',
      desc: '250m² | T3 | 1º andar',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 3,
      name: 'T3 no Porto',
      address: 'Porto',
      desc: '250m² | T3 | 1º andar',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
  ];


  getHouses() {
    return this.houses;
  }
}

