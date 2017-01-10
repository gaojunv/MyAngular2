import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services';
import {AuthHttp} from  'angular2-jwt';

@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']

})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    thing:any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private  authHttp: AuthHttp) { }

    ngOnInit() {
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.authHttp.get('https://www.baidu.com')
          .subscribe(
            data => {this.thing = data;
              console.log(data);
            },
            err => console.log(err),
            () => console.log('Request Complete')
          );
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
