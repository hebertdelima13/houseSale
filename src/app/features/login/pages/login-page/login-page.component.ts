import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import * as CryptoJS from 'crypto-js'; 
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;
  loginForm!: FormGroup
  isSubmitted = false
  authError = false
  authMessage = 'E-mail ou senha incorreta!'

  constructor(private router: Router, private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._initLoginForm()
  }

  private _initLoginForm() {
    this.loginForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.isSubmitted = true

    if(this.loginForm.invalid) return;

    this.userService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe((user) => {
      const newUser = {
        ...user
      }  
      newUser.password = CryptoJS.AES.encrypt( newUser.password, "password").toString()  
      localStorage.setItem('member', JSON.stringify(newUser));
      location.href = 'dashboard'

    }, (error: HttpErrorResponse) => {
      this.authError = true
      if(error.status !== 400) {
        this.authMessage = 'Erro no servidor, tente mais tarde!'
      }
    })
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
