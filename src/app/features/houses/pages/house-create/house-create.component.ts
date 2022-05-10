import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { House } from '../../models/house';
import { HouseService } from '../../services/house.service';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';

@Component({
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.scss']
})
export class HouseCreateComponent implements OnInit {

  house: House = this.houseService.getDefaultHouse();
  

  constructor(private houseService: HouseService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  

  housesForm = new FormGroup({    
    id: new FormControl(this.house.id),
    title: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    descShort: new FormControl('', [Validators.required]),
    descFull: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required])
  });

  onSubmit(housesForm: FormGroup) {
    const formValue = housesForm.value;
    const houses: House = {
      id: this.house.id,
      ...formValue,
      inclusionDate: new Date()
    };
    this.houseService.createHouse(houses);
    this.toastr.success('Imóvel adicionado com sucesso!', '', {
      progressBar: true,
      timeOut: 1500
    });

    timer(1500).toPromise().then(done => {
      console.log(this.house)
      this.housesForm.reset();
    })
  }

  back() {
    localStorage.removeItem('member')
    this.router.navigateByUrl('/')
  }

}
