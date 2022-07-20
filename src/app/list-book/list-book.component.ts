import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  list :any = []
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/books").subscribe((data)=>{
      this.list = data;
      console.log(data)
    })
  }

}
