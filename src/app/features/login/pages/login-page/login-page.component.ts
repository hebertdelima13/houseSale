import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import * as CryptoJS from 'crypto-js'; 

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(loginForm: FormGroup) {
    const formValue = loginForm.value;
    const user = this.userService.authenticate(formValue.email, formValue.password);
    const userJson = JSON.stringify(formValue.password)
    if(!user) {
      return this.error = true;
    }
    localStorage.setItem('member', CryptoJS.AES.encrypt( userJson, "member").toString())
    return this.router.navigateByUrl('housescreate');
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
