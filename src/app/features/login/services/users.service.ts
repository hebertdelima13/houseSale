import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as moment from 'moment';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = environment.apiURL + 'members'

  // users: Array<User> = [
  //   {
  //     id: 1,
  //     name: 'Administrador',
  //     email: 'admin@gmail.com',
  //     password: 'admin'
  //   }
  // ];

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password:string): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/login`, {email, password})
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  // getDefaultUser(): User {
  //   return {
  //     id: this.generateNextId(),
  //     name: '',
  //     email: '',
  //     password: ''
  //   }
  // }

  // authenticate(email: string, password: string) {
  //   return this.users.find((user) => user.email === email && user.password === password);
  // }

  // createUser(user: User) {
  //   this.users.push(user);
  //   return this.users;
  // }

  // generateNextId(): number {
  //   return this.users[(this.users.length - 1)].id + 1;
  // }
}
