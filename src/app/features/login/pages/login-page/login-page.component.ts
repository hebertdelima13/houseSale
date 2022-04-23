import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login(loginForm: NgForm) {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
