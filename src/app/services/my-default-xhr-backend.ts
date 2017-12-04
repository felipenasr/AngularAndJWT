import {Request, XHRBackend, XHRConnection} from '@angular/http';
import "rxjs/add/operator/map";

export class MyDefaultXHRBackend extends XHRBackend {

    createConnection(request: Request): XHRConnection {
        let xhrConnection = super.createConnection(request);
        xhrConnection.response = xhrConnection
        .response
        .map((response) => {
            let authorization = response.headers.get('Authorization');
            console.log(authorization);
            return response;
        });
        
        return xhrConnection;
    }

}