import { Injectable } from '@angular/core';
import { Request, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, Response, XHRConnection} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { JwtTokenService } from "../services/jwt-token.service";



@Injectable()
export class TesteService extends XHRBackend  {

  

  constructor(
    browserXhr: BrowserXhr,
    baseResponseOptions: ResponseOptions,
    xsrfStrategy: XSRFStrategy,
    private token: JwtTokenService) {
    super(browserXhr, baseResponseOptions, xsrfStrategy);
  }


  createConnection(request: Request): XHRConnection {
    let xhrConnection = super.createConnection(request);
    xhrConnection.response = xhrConnection
        .response
        .map((response) => {      
          //pegando header authorization
          let authorization = response.headers.get('Authorization');
                    return response;
            });
          return xhrConnection;
    }

}
