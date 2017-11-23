import { Component, OnInit } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { JwtTokenService } from '../services/jwt-token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  private url: string = "http://cprado.com.br/api/login";
  user = {
    user_name: '',
    password: ''
  }
  redirectAfterLofin = ['/funcionarios'];

  private headers = new Headers({
    'Content-Type': 'application/json', 
    'Accept': 'application/json'

  });
  constructor(
    private http:Http,
    private jwtToken: JwtTokenService,
    private router: Router
  ) {}

  ngOnInit() {
    
  }
  
  login(){
    this.http.post(
      this.url,
      JSON.stringify(this.user),
      {headers: this.headers})
      .toPromise().then(res =>{
        this.jwtToken.token = res.json().token;
        this.router.navigate(this.redirectAfterLofin);
      
      }).catch(err => err);
      
    
  }
}
