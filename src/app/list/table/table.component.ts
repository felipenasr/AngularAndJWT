import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { JwtTokenService } from '../../services/jwt-token.service';
import "rxjs/add/operator/toPromise"
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  
  private apiUrl = "http://cprado.com.br/api/funcionarios"
  funcionarios: Array<Object> = [];

  constructor(
    private http:Http,
    private jwtToken: JwtTokenService,
  ) { 
  }

  ngOnInit() {
    this.getProdutos()
    console.log(this.funcionarios);
    
  }
  

  getProdutos(){
    let requestOpt = new RequestOptions();
    requestOpt.headers = new Headers({
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.jwtToken.token}`
    });
    this.http.get(
      this.apiUrl,
      requestOpt
    ).toPromise().then(res => this.funcionarios =  res.json() );

  }
}
