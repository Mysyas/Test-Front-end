import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IArtwork} from "./interfaces/iartwork";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'TestFrondApp';
  constructor() {
  }


}
