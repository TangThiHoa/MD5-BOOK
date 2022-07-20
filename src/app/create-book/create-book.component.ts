import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  save() {
    const obj = this.bookForm.value
    this.httpClient.post("http://localhost:3000/books", obj).subscribe(() => {
      this.router.navigate(['/']);
    })
  }


}
