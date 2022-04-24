import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Houses } from '../../models/houses';
import { HousesService } from '../../services/houses.service';

@Component({
  templateUrl: './houses-create.component.html',
  styleUrls: ['./houses-create.component.scss']
})
export class HousesCreateComponent implements OnInit {

  house: Houses = this.houseService.getDefaultHouse();

  constructor(private houseService: HousesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(houseForm: NgForm) {
    const house: Houses = {
      id: this.house.id,
      ...houseForm.form.value,
      inclusionDate: this.house.inclusionDate
    };
    this.houseService.createHouse(house);
    alert('Casa adicionada com sucesso!');
    console.log(this.house)
    this.router.navigateByUrl('/');
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
