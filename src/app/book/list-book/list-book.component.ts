import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
list : any;
  constructor(private httpClient : HttpClient,
              private bookService : BookService,
              private router : Router) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe((data) => {
      console.log(data)
      this.list = data;
    }, error => {

    })
  }

  delete(id : number) {
    this.bookService.delete(id).subscribe(()=>{
      alert("Xoa thanh cong")

    },error => {
      alert("xoa that bai ")
    })
  }
}
