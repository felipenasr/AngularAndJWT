import { Component, OnInit } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import { JwtTokenService } from '../services/jwt-token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  private url_login: string = "http://cprado.com.br/api/login";
  private url_api: string = "http://cprado.com.br/api/empresas";
  private headers = new Headers({
    'Content-Type': 'application/json', 
    'Accept': 'application/json'
    
  });
  user = {
    user_name: 'cliente01',
    password: '123456'
  }
  
  constructor(
    private http:Http,
    private jwtToken: JwtTokenService,
    private router: Router,
    private auth: AuthService
  ) {}


  login(){
    this.http.post(
      this.url_login,
      JSON.stringify(this.user),
      {headers: this.headers})
      .toPromise().then(res =>{
        this.auth.check = true;
        this.jwtToken.token = res.json().token;      
      }).catch(err => err);    
  }

  get(): Observable<any>{
    this.headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
    return this.http.get(
      this.url_api,
      {headers: this.headers}
    ).map((res)=>{
      console.log(res);
    }).catch(err=>err);

  }


  ngOnInit() {
  }


  
  geradorToken(){
    event.preventDefault();
    this.login();
  }


}
