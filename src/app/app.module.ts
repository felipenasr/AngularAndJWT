import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule, XHRBackend } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './list/table/table.component';

import routing from "./app.routing";

import { LocalStorageService } from './services/local-storage.service';
import { JwtTokenService } from './services/jwt-token.service';
import { AuthService } from './services/auth.service';
import { AuthGuardRouterService } from './services/auth-guard-router.service';
import { DefaultRequestsOptsService } from './services/default-requests-opts.service';

import {MyDefaultXHRBackend } from './services/my-default-xhr-backend';


import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { TesteComponent } from './teste/teste.component';
import { TesteService } from './teste/teste.service';

import { AuthInterceptor } from './services/auth-header.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    MenuComponent,
    LogoutComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LocalStorageService,
    JwtTokenService,
    AuthService,
    AuthGuardRouterService,
    DefaultRequestsOptsService,
    AuthInterceptor,
    {provide: XHRBackend, useClass: TesteService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
