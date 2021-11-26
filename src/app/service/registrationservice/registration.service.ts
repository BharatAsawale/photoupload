import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from 'src/app/registration';
import { User } from 'src/app/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private _http:HttpClient, ) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post(`${this.apiServerUrl}/user/auth`,user);
  }

  public registerUserFromRemote(registration:Registration):Observable<any>{
    return this._http.post(`${this.apiServerUrl}/user/register`,registration);
  }

}
