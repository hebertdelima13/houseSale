import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  user: User = this.userService.getDefaultUser();
  error: boolean = false;

  constructor(private userService: UsersService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    id: new FormControl(this.user.id),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(registerForm: FormGroup) {
    const formValue = registerForm.value;
    const users: User = {
      id: this.user.id,
      ...formValue
    };
    this.userService.createUser(users);
    this.toastr.success('Usuário cadastrado com sucesso!', '', {
      progressBar: true,
      timeOut: 2000
    });

    timer(2000).toPromise().then(done => {
      console.log(this.user)
      this.router.navigateByUrl('/login');
    })

  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
