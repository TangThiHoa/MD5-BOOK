import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url= "http://localhost:3000/books";

  constructor(private httpClient: HttpClient) {
  }
  findAll() : Observable<any>{
    return  this.httpClient.get(this.url);

  }
  findById(id : any): Observable<any>{
    return this.httpClient.get(this.url+"/"+id)
  }
  update (id:any, book:any): Observable<any>{
    return this.httpClient.put(this.url+"/"+id,book)
  }
  delete (id : any) : Observable<any>{
    return this.httpClient.delete(this.url+"/"+ id)

  }
}
