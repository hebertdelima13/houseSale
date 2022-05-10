import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  // user: User = this.userService.getDefaultUser();
  error: boolean = false;
  form!: FormGroup;
  isSubmitted: boolean = false
  currentUserId: number

  constructor(private userService: UsersService, private toastr: ToastrService,
    private router: Router, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      password: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.isSubmitted = true
    if(this.form.invalid) {
      return;
    }

    const user: User = {
      id: this.currentUserId,
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    }
      this._addUser(user)
    
  }

  _addUser(user: User) {
    this.userService.register(user).subscribe(res => {
      this.toastr.success('Usuário adicionado com sucesso!', '', {
        progressBar: true,
        timeOut: 1500
      });
      timer(1500).toPromise().then(done => {
        location.href = 'login'
      })
    }, (error) => {
      this.toastr.error('O usuário não pode ser adicionado!', '', {
        progressBar: true,
        timeOut: 2000
      }) ;
    })
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
