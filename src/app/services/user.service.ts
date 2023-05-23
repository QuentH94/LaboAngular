
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createUser, login, User } from '../models/user-model';

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    constructor (private _httpClient: HttpClient) { }
    private postUrl = "https://localhost:7060/api/User/register";
    private logUrl = "https://localhost:7060/api/User/login";
    private delUrl = "https://localhost:7060/api/User/";

    getUser(url: string): Observable<User[]> {
        return this._httpClient.get<User[]>(url);
    }

    createUser(user: createUser):Observable<createUser> {
        return this._httpClient.post<createUser>(this.postUrl, user);
    }

    login(user : login):Observable<string>{
        return this._httpClient.post(this.logUrl,user,{ 'responseType': 'text' });
    }
    deleteUser(id : number):Observable<void>{
        return this._httpClient.delete<void>(this.delUrl +id);
    }
    
      
}