import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  obj : any = [];

  constructor( private  activatedRoute : ActivatedRoute,
               private  httpClient : HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param : ParamMap)=>{
      this.httpClient.get('http://localhost:3000/books/'+ param.get('id')).subscribe((data)=>{
        this.obj= data
      })

    })
  }

}
