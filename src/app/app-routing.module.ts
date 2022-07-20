import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./list-book/list-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";


const routes: Routes = [
  {
    path : "",
    component: ListBookComponent
  },
  {
    path : "create-book",
    component: CreateBookComponent
  },{
  path : "detail-book/:id",
    component : DetailBookComponent
  },{
  path : "delete-book/:id",
    component : DeleteBookComponent
  },{
  path :"edit-book/:id",
    component : EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
