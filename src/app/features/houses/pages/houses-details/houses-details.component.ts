import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Houses } from '../../models/houses';
import { HousesService } from '../../services/houses.service';

@Component({
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.scss']
})
export class HousesDetailsComponent implements OnInit {

  house?: Houses;

  constructor(
    private activedRoute: ActivatedRoute,
    private houseService: HousesService,
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
