import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{
  form!: FormGroup;
  id!:void;
  constructor (private fb: FormBuilder, private _UserService : UserService,  private _sessionStorageService : SessionStorageService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      firstname:[''],
      lastname:[''],    
      pseudo:[''],
    },);
  }
  updateThisUser(){
    this.id = this._sessionStorageService.getItem('id');
    this._UserService.updateUser(this.form.value,this.id).subscribe();
    console.log(this.id);
  }
}
