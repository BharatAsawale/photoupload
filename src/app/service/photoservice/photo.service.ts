import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiServerUrl = "http://localhost:8080";
  
  constructor(private http: HttpClient) { }

  public getPhoto(photoid:String):Observable<Photo>{
    return this.http.get<Photo
    >(`${this.apiServerUrl}/photos/all`);
  }

  public getAll():Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.apiServerUrl}/photos/all`);
  }
}
