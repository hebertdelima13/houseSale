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
      title: 'T2 em Lisboa',
      address: 'Lisboa',
      descShort: '200m² | T2 | 3º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lisboa',
      price: 500,
      img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 2,
      title: 'T3 no Porto',
      address: 'Porto',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lisboa',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 3,
      title: 'T3 no Porto',
      address: 'Porto',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lisboa',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 4,
      title: 'T3 no Porto',
      address: 'Porto',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lisboa',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
    {
      id: 5,
      title: 'T3 no Porto',
      address: 'Porto',
      descShort: '250m² | T3 | 1º andar',
      descFull: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      city: 'Lisboa',
      price: 700,
      img: 'https://images.pexels.com/photos/10530185/pexels-photo-10530185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      inclusionDate: new Date()
    },
  ];


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

