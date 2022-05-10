import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/login/models/user.model';
import { House } from '../../models/house';
import { HouseService } from '../../services/house.service';

@Component({
  templateUrl: './house-dashboard.component.html',
  styleUrls: ['./house-dashboard.component.scss']
})
export class HouseDashboardComponent implements OnInit {

  houses: Array<House> = this.houseServices.getHouses();
  user?: User

  constructor(private houseServices: HouseService) { }

  ngOnInit(): void {
    const usersStorage = localStorage.getItem('member');
    if(usersStorage) this.user = JSON.parse(usersStorage);
    console.log(this.user)
  }

}
