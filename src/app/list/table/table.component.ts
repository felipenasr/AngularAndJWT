import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Request } from '@angular/http';
import "rxjs/add/operator/toPromise"
import "rxjs/add/operator/map"
import { DefaultRequestsOptsService } from '../../services/default-requests-opts.service';

import {MyDefaultXHRBackend } from '../../services/my-default-xhr-backend';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  private apiUrl = "http://cprado.com.br/api/empresas"
  funcionarios: Array<Object> = [];
  
  constructor(
    private http:Http,
    private requestDefault: DefaultRequestsOptsService
  ) { 
  }
  
  ngOnInit() {
    this.getProdutos()
    
  }

  

  getProdutos(){
    this.http.get(
      this.apiUrl,
      this.requestDefault.merge(new RequestOptions)).map(res => {
        this.funcionarios =  res.json().data
        console.log(res);
      } )
    


  }


  updateToke(): Observable<any>{

    return this.http.get(
      this.apiUrl,
      this.requestDefault.merge(new RequestOptions)
    ).map((res)=>{
      console.log(res);
    })


  }

}
