import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  
  constructor (private fb: FormBuilder, private _UserService : UserService, private _sessionStorageService : SessionStorageService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', []],
      password: ['', []],      
    });
  }
  login(){
    this._UserService.login(this.form.value).subscribe((Response : string) => sessionStorage.setItem("token",Response));
    
  }

}
