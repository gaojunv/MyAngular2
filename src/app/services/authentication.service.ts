import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {AuthHttp }from 'angular2-jwt';
import {environment} from  '../../environments/environment';

@Injectable()
export class AuthenticationService {
    url:string
    constructor(private athHttp: AuthHttp) { 
        this.url = environment.restUrl;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    login(username: string, password: string) {
        return this.athHttp.post(this.url+'/auth', JSON.stringify({ username: username, password: password }))
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
}
