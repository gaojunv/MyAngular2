import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {AuthHttp }from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
    constructor(private athHttp: AuthHttp) { }

    login(username: string, password: string) {
        return this.athHttp.post('http://127.0.0.1:8080/auth', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let token = response.json().token;
                if (token) {
                    localStorage.setItem('token', token);
                }
            });
    }

    logout() {
        localStorage.removeItem('token');
    }

    getUserList(){
        return this.athHttp.get('http://127.0.0.1:8080/api/user')
        .toPromise()
        .then((response: Response) =>  response.json() as any[]);
    }
}
