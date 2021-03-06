import { Component, OnInit } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import { JwtTokenService } from '../services/jwt-token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


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
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    
  }
  
  login(){
    this.http.post(
      this.url,
      JSON.stringify(this.user),
      {headers: this.headers})
      .toPromise().then(res =>{
        this.auth.check = true;
        this.jwtToken.token = res.json().token;      
      }).catch(err => err);
      
    
  }
}
