import { Injectable } from '@angular/core';
import { Houses } from '../models/houses';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { }

  houses: Array<Houses> = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      descShort: '200m² | T2 | 3º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lorem Ipsum',
      price: 500,
      img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lorem Ipsum',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lorem Ipsum',
      price: 525,
      img: 'https://images.pexels.com/photos/2103826/pexels-photo-2103826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      inclusionDate: new Date()
    },
    {
      id: 4,
      title: 'Lorem Ipsum',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lorem Ipsum',
      price: 400,
      img: 'https://images.pexels.com/photos/979190/pexels-photo-979190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      inclusionDate: new Date()
    },
    {
      id: 5,
      title: 'Lorem Ipsum',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lorem Ipsum',
      price: 250.50,
      img: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
  ];

  getDefaultHouse(): Houses {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateNextId(),
      title: '',
      descShort: '',
      descFull: '',
      city: '',
      price: 0,
      img: '',
      inclusionDate: dateToday
    }
  }

  getHouses() {
    return this.houses;
  }

  getById(id: number) {
    return this.houses.find((house) => house.id == id);
  }

  createHouse(house: Houses) {
    this.houses.push(house);
    return this.houses;
  }

  removeById(id: number) {
    const housesIndex = this.houses.findIndex((house) => house.id === id);
    return this.houses.splice(housesIndex, 1);
  }

  generateNextId(): number {
    return this.houses[(this.houses.length - 1)].id + 1;
  }
}

