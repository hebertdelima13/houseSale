import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/features/login/models/user.model';
import { House } from '../../models/house';
import { HouseService } from '../../services/house.service';

@Component({
  templateUrl: './house-dashboard.component.html',
  styleUrls: ['./house-dashboard.component.scss']
})
export class HouseDashboardComponent implements OnInit {

  houses: House[] = []
  user?: User

  constructor(private houseServices: HouseService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user)
    this.getUser()
    this.getHouses()
  }

  getUser() {
    const usersStorage = localStorage.getItem('member');
    if(usersStorage) this.user = JSON.parse(usersStorage);
  }

  getHouses() {
    this.houseServices.getHouses().subscribe((houses) => {
      this.houses = houses
    })
  }

  updateHouse(houseId: number) {
    this.router.navigateByUrl(`housescreate/${houseId}`)
  }

  deleteHouse(houseId: number) {
    this.houseServices.deleteHouse(houseId).subscribe(res => {
      this.getHouses()
      this.toastr.success('Imóvel deletado com sucesso!', '', {
        progressBar: true,
        timeOut: 1500
      });
    }, (error) => {
      this.toastr.error('O imóvel não pode ser deletado!', '', {
        progressBar: true,
        timeOut: 1500
      }) ;
    })
  }

  back() {
    localStorage.removeItem('member')
    this.router.navigateByUrl('/')
  }

}
