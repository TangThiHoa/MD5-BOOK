import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./book/list-book/list-book.component";
import {CreateBookComponent} from "./book/create-book/create-book.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {EditBookComponent} from "./book/edit-book/edit-book.component";

const routes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "home",
    component : ListBookComponent ,
    children : [
      {
        path : "list",
        component : ListBookComponent
      },
      {
        path : "create",
        component : CreateBookComponent
      },
      {
        path : "edit-book/:id",
        component : EditBookComponent
      }
    ]
  },
  {
    path : "admin",
    component : AdminComponent ,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
