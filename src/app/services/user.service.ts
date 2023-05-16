
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    constructor (private _httpClient: HttpClient) { }

    getUser(url: string): Observable<User[]> {
        return this._httpClient.get<User[]>(url);
      }


      
}