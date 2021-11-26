import { Binary } from "@angular/compiler";

export class Photo{
    id:String;
    title:String;
    image:Binary;
    constructor(id:String,title:String,image:Binary){
        this.id=id;
        this.title=title;
        this.image=image;
    };
}