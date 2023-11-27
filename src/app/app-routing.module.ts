import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ArtworkDetailsComponent} from "./artwork-details/artwork-details.component";

const routes: Routes = [
  {path:"search",component:SearchComponent},
  {path:"artwork",component:ArtworkDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
