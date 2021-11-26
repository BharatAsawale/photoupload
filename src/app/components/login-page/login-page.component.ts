import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { from } from 'rxjs';
import { RegistrationService } from 'src/app/service/registrationservice/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user=new User();
  msg="";
  constructor(private _service:RegistrationService,private _router : Router) { }
  
  ngOnInit() {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log(data);
        this._router.navigate(["/home"]);
    },
      error=>{
        console.log("exception occured");
        this.msg="Bad credentials, Please valid id and password";
      }
    )
  }
}
