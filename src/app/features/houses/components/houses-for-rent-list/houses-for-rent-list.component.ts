import { Component, OnInit } from '@angular/core';
import { Houses } from '../../models/houses';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-houses-for-rent-list',
  templateUrl: './houses-for-rent-list.component.html',
  styleUrls: ['./houses-for-rent-list.component.scss']
})
export class HousesForRentListComponent implements OnInit {

  houses: Array<Houses> = this.housesServices.getHouses();

  constructor(private housesServices: HousesService) { }

  ngOnInit(): void {
  }

}
