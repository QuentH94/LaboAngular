import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from './validators/email-validator';
import { twoPasswordValidate } from './validators/password-validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;
  
  constructor (private fb: FormBuilder, private _UserService : UserService) { }

  ngOnInit (): void {
    this.form = this.fb.group({
      
      email: ['', [emailValidator]],
      password: ['', []],
      passwordConfirmation: ['', []],
      pseudo:[''],
    }, {
      validators: [twoPasswordValidate,]
    });
  }

  createNewUser(){
    this._UserService.createUser(this.form.value).subscribe();
    console.log("Succes")
  }

}
