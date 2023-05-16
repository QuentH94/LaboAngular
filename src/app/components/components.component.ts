import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
 
  private url = 'https://localhost:7060/api/User';
  User! : User[];

  constructor (private _UserService: UserService) { }
  ngOnInit(): void {
   this.loadData(this.url);
  }

  loadData (url: string): void {
    this._UserService
      .getUser(url)
      .subscribe((data) => this.User = data);
  }



}
