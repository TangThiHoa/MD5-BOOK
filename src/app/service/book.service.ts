import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API = 'http://localhost:3000/books'

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API);
  }

  save(book: Book): Observable<any> {
    return this.httpClient.post(this.API, book)

  }

  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(this.API+`/${id}`);
  }
  update(id: string, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.API,book);
  }
  delete(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(this.API+`/${id}`);
  }

}
