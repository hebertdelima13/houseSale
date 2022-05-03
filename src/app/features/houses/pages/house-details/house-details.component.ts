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
    this.activedRoute.params.subscribe((params) => {
      this.house = this.houseService.getById(params['id']);
    });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
