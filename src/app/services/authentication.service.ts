import { Injectable,Inject } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AuthHttp }from 'angular2-jwt';
import {AppConfig} from '../app.config';

@Injectable()
export class AuthenticationService {
    url:string;
    constructor(private athHttp: AuthHttp,@Inject(AppConfig) config:AppConfig) {
        this.url = config.restUrl;
    }

    login(username: string, password: string) {
        return this.athHttp.post(`${this.url}/auth`, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let token = response.json().token;
                if (token) {
                    localStorage.setItem('token', token);
                }
            });
    }

    static logout() {
        localStorage.removeItem('token');
    }
}
