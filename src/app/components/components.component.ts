import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
 
  private url = 'https://localhost:7060/api/User';
  User! : User[];

  constructor (private _UserService: UserService, private router: Router, private _sessionStorageService : SessionStorageService) { }
  ngOnInit(): void {
   this.loadData(this.url);
  }

  loadData (url: string): void {
    this._UserService
      .getUser(url)
      .subscribe((data) => this.User = data);
  }

  
  updateUserRoute(id : number){
    this.router.navigate(['EditUser']);
    this._sessionStorageService.setItem("id",JSON.stringify(id));
  }

  delete(id : number):void{
    this._UserService
    .deleteUser(id).subscribe();
    console.log("Succes")
    
  }

  


}
