import { Component, OnInit } from '@angular/core';
import { Http,Headers, Response, Request, RequestMethod, XHRBackend, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import { JwtTokenService } from '../services/jwt-token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
declare var $: any;

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
    'Accept': 'application/json',
    'Authorization': '',
    'Vary': ''
    
  });

  
  request_opt = new RequestOptions({
    method: RequestMethod.Get,
    url: this.url_api,
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
    
  get(){
    this.headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
    this.request_opt.headers = this.headers;
    return this.http.get(
      this.url_api,
      this.request_opt 
    ).subscribe(result => {
      let a = result.headers;
      console.log(this.request_opt)
      console.log(a);

      return result;
    });

  }

  teste(){
    $.ajax({
      type: 'GET',
      url:this.url_api,
      headers: this.headers,
      success: function(data, textStatus, request){
           alert(request.getResponseHeader('some_header'));
      },
      error: function (request, textStatus, errorThrown) {
           alert(request.getResponseHeader('some_header'));
      }
     });

  }

  ngOnInit() {
  }


  
  geradorToken(){
    event.preventDefault();
    this.login();
  }


}
