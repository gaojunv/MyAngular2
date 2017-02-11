import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    url: string;
    constructor(private athHttp: AuthHttp, @Inject(AppConfig) config: AppConfig) {
        this.url = config.restUrl;
    }
    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getUserList(): Promise<any[]> {
        return this.athHttp.get(`${this.url}/api/user`)
            .toPromise()
            .then((response: Response) => response.json() as any[])
            .catch(UserService.handleError);
    }
}
