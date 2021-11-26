import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/photo';
import { PhotoService } from 'src/app/service/photoservice/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {
  public photo:Photo;
  public photos:Photo[];
  
  constructor(private photoservice: PhotoService) {}

  ngOnInit(): void {
    this.getAll();
  }
  public getPhoto(id:String):void{
    console.log("receiving data");
    this.photoservice.getPhoto(id).subscribe(
      (response: Photo)=>{
        this.photo=response;
        console.log(this.photo);
        },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        }
    );
  }
  public getAll():void{
    console.log("receiving data");
    this.photoservice.getAll().subscribe(
      (response:Photo[])=>{
        this.photos=response;
        console.log(this.photos);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  
}
