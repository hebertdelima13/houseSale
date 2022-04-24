import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  user: User = this.userService.getDefaultUser();
  error: boolean = false;

  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: NgForm) {
    const users: User = {
      id: this.user.id,
      ...registerForm.form.value
    };
    this.userService.createUser(users);
    alert('Usuário criado com sucesso!');
    console.log(this.user)
    this.router.navigateByUrl('/login');
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
