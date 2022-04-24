import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }
  
  login(loginForm: NgForm) {
    const data = loginForm.value;
    const user = this.userService.authenticate(data.email, data.password);
    if(!user) {
      return this.error = true;
    }
    return this.router.navigateByUrl('housescreate');
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
