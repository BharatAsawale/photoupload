import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/registration';
import { RegistrationService } from 'src/app/service/registrationservice/registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration=new Registration();
  msg="";
  form: FormGroup = new FormGroup({});

  constructor(private _service:RegistrationService,private _router : Router) {}

  ngOnInit(): void {
  }

  public registerUser(registrationForm: NgForm):void{
    this._service.registerUserFromRemote(registrationForm.value).subscribe(
      (response: Registration) => {
        console.log(response);
        this._router.navigate(["/login"]);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        registrationForm.reset();
      }
    )
  }

}
