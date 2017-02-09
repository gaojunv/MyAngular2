import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {AuthHttp }from 'angular2-jwt';


@Injectable()
export class UserService {
    constructor(private athHttp: AuthHttp) { }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getUserList():Promise<any[]>{
        return this.athHttp.get('http://127.0.0.1:8080/api/user')
        .toPromise()
        .then((response: Response) =>  response.json() as any[])
        .catch(this.handleError);;
    }
}
