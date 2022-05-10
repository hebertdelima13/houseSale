import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from '../../models/house';
import { HouseService } from '../../services/house.service';

@Component({
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  house?: House;

  constructor(
    private activedRoute: ActivatedRoute,
    private houseService: HouseService,
    private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params.id) {
        this.getHouseId(params.id)
      }
    })
  }

  getHouseId(id: number) {
    this.houseService
      .getHouseId(id)
      .subscribe((resHouse) => {
        this.house = resHouse;
      });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
