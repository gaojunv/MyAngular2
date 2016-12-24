import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/auth', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let token = response.json();
                if (token) {
                    localStorage.setItem('token', JSON.stringify(token));
                }
            });
    }

    logout() {
        localStorage.removeItem('token');
    }
}
