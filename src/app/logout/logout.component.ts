import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  redirectAfetLogout = ['/login'];
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  logout(){
    this.auth.logout();
    this.router.navigate(this.redirectAfetLogout);
  }

  ngOnInit() {
    this.logout();
  }
}
