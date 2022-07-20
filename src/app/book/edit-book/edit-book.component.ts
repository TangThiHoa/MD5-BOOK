import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Book} from "../../model/book";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: any
  editForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),

  })


  constructor(private activatedRout: ActivatedRoute,
              private bookService: BookService,
              private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(paramap => {
      // @ts-ignore
      const id = +paramap.get('id');
      console.log(typeof id)
      this.bookService.findById(id).subscribe(result => {
        this.book = result;
        console.log(this.book)
      }, error => {
        console.log(error)
      })
    })
    this.book = {
      title: '',
      author: '',
      description: ''
    }
  }

  update() {
    const book = this.editForm.value;
    console.log(book);
    this.bookService.update(this.book, book).subscribe(() => {
      alert("Thanh cong ")
    }, error => {
      alert("That bai")
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
