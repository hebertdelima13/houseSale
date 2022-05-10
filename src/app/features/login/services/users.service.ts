import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = environment.apiURL + 'members'

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password:string): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/login`, {email, password})
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

}
