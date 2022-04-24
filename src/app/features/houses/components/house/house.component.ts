import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Houses } from '../../models/houses';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input()
  house?: Houses;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  houseDetails(id: number) {
    this.router.navigateByUrl(`/houses-details/${id}`);
  }
}
