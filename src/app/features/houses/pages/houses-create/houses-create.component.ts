import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Houses } from '../../models/houses';
import { HousesService } from '../../services/houses.service';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';

@Component({
  templateUrl: './houses-create.component.html',
  styleUrls: ['./houses-create.component.scss']
})
export class HousesCreateComponent implements OnInit {

  house: Houses = this.houseService.getDefaultHouse();
  

  constructor(private houseService: HousesService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  

  housesForm = new FormGroup({    
    id: new FormControl(this.house.id),
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    city: new FormControl('', [Validators.required]),
    descShort: new FormControl('', [Validators.required]),
    descFull: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required])
  });

  onSubmit(housesForm: FormGroup) {
    const formValue = housesForm.value;
    const houses: Houses = {
      id: this.house.id,
      ...formValue
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
