import {Component, Input, OnInit} from '@angular/core';
import {IArtwork} from "../interfaces/iartwork";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrl: './artwork-details.component.css'
})
export class ArtworkDetailsComponent implements OnInit{
  id:number|any;
  art:any;

  constructor(private route:ActivatedRoute,private http:HttpClient) {

  }
  ngOnInit(): void {
      this.route.queryParams.subscribe((data: any)=>{
          this.id=data.data;
          console.log(this.id);
      });
      this.art=this.get();
  }

    private get() {

        return this.http.get(`https://api.artic.edu/api/v1/artworks/${this.id}`).subscribe((res)=>{
            // @ts-ignore
          this.art=res.data;
        });

    }
    public getImage(){
        return `https://www.artic.edu/iiif/2/${this.art.image_id}/full/843,/0/default.jpg`;
    }
}
