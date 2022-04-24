import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Administrador',
      email: 'admin@gmail.com',
      password: 'admin'
    }
  ];

  constructor() { }

  getDefaultUser(): User {
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: ''
    }
  }

  authenticate(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password);
  }

  createUser(user: User) {
    this.users.push(user);
    return this.users;
  }

  generateNextId(): number {
    return this.users[(this.users.length - 1)].id + 1;
  }
}
