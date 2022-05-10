import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-for-rent-list',
  templateUrl: './house-for-rent-list.component.html',
  styleUrls: ['./house-for-rent-list.component.scss']
})
export class HouseForRentListComponent implements OnInit {

  houses: House[] = []

  constructor(private houseServices: HouseService) { }

  ngOnInit(): void {
    this.getHouses()
  }

  getHouses() {
    this.houseServices.getHouses().subscribe((houses) => {
      this.houses = houses
    })
  }

}
