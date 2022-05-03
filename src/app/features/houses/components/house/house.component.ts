import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../../models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input()
  house?: House;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  houseDetails(id: number) {
    this.router.navigateByUrl(`/houses-details/${id}`);
  }
}
