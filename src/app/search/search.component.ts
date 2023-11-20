import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IArtwork} from "../interfaces/iartwork";
import {filter} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  constructor(private http:HttpClient) {
  }
  artworks:any
  ngOnInit(): void {
    this.get();
  }
  searchText:string="";
  public get(){

    // @ts-ignore
    this.http.get<IArtwork[]>("https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,image_id").subscribe((res)=>this.artworks=res.data);
    //this.artworks.map((da)=>console.log(da));
  }
  public getImage(image_id:string){
    return `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
  }

  protected readonly filter = filter;
}
