import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../../model/book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
form = new FormGroup({
  title : new FormControl(""),
  author : new FormControl(""),
  description : new FormControl("")
})
  obj : any;
  listBook : Book [] = [];
  constructor( private httpClient : HttpClient,
               private bookService : BookService,
               private router : Router) { }

  ngOnInit(): void {
  this.bookService.findAll().subscribe((data) =>{
    console.log(data)
    this.listBook = data
    ;
  })
  }
  add (){
    console.log(this.form.value);
    this.obj = {
      title : this.form.value.title,
      author : this.form.value.author,
      description : this.form.value.description
    }
    this.bookService.save(this.obj).subscribe((data) =>{
      this.router.navigate(['/home'])



    },error => {
      alert("That bai")
    })
  }


}
