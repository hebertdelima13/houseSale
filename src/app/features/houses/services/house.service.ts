import { Injectable } from '@angular/core';
import { House } from '../models/house';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  apiURL = environment.apiURL + 'houses'

  constructor(private http: HttpClient, private router: Router) { }

  getHouses(): Observable <House[]> {
    return this.http.get<House[]>(this.apiURL)
  }

  getHouseId(houseId: number): Observable <House> {
    return this.http.get<House>(`${this.apiURL}/${houseId}`)
  }

  createHouse(house: House): Observable <House>{
    return this.http.post<House>(this.apiURL, house)
  }

  updateHouse(house: House): Observable <House>{
    return this.http.put<House>(`${this.apiURL}/${house.id}`, house)
  }

  deleteHouse(houseId: number): Observable <Object>{
    return this.http.delete<Object>(`${this.apiURL}/${houseId}`)
  }

}

