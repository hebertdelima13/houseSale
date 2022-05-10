import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from '../../models/house';
import { HouseService } from '../../services/house.service';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';

@Component({
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.scss']
})
export class HouseCreateComponent implements OnInit {

  form!: FormGroup;
  isSubmitted: boolean = false
  editmode = false
  houseId: number
  

  constructor(private formBuilder: FormBuilder, private houseService: HouseService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        title: ['', Validators.required],
        desc_short: ['', Validators.required],
        desc_full: ['', Validators.required],
        city: ['', Validators.required],
        price: ['', Validators.required],
        img: ['', Validators.required]
      })
      this._checkEditMode()
    }

    onSubmit() {
      this.isSubmitted = true
      if(this.form.invalid) {
        return;
      }
  
      const house: House = {
        id: this.houseId,
        title: this.form.controls.title.value,
        desc_short: this.form.controls.desc_short.value,
        desc_full: this.form.controls.desc_full.value,
        city: this.form.controls.city.value,
        price: this.form.controls.price.value,
        img: this.form.controls.img.value
      }
  
      if(this.editmode) {
        this.updateHouse(house)
      } else {
        this.createHouse(house)
      }
    }
  
    createHouse(house: House) {
      this.houseService.createHouse(house).subscribe(res => {
        this.toastr.success('Imóvel adicionado com sucesso!', '', {
          progressBar: true,
          timeOut: 1500
        });
        timer(1500).toPromise().then(done => {
          location.href = 'dashboard'
        })
      }, (error) => {
        this.toastr.error('O imóvel não pode ser adicionado!', '', {
          progressBar: true,
          timeOut: 2000
        }) ;
      })
    }
  
    updateHouse(house: House) {
      this.houseService.updateHouse(house).subscribe(res => {
        this.toastr.success('Imóvel atualizado com sucesso!', '', {
          progressBar: true,
          timeOut: 1500
        });
        timer(1500).toPromise().then(done => {
          location.href = 'dashboard'
        })
      }, (error) => {
        this.toastr.error('O imóvel não pode ser atualizado!', '', {
          progressBar: true,
          timeOut: 2000
        }) ;
      })
    }
  
    private _checkEditMode() {
      this.route.params.subscribe(params => {
        if(params.id) {
          this.editmode = true
          this.houseId = params.id
          this.houseService.getHouseId(params.id).subscribe(house => {
            this.form.controls.title.setValue(house.title)
            this.form.controls.desc_short.setValue(house.desc_short),
            this.form.controls.desc_full.setValue(house.desc_full),
            this.form.controls.city.setValue(house.city),
            this.form.controls.price.setValue(house.price),
            this.form.controls.img.setValue(house.img)
          })
        }
      })
    }
  
  back() {
    this.router.navigateByUrl('dashboard')
  }

}
