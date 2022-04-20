import { Component, Input, OnInit } from '@angular/core';
import { Houses } from '../../models/houses';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input()
  house?: Houses;

  constructor() { }

  ngOnInit(): void {
  }

}
