import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';
import { Observable } from 'rxjs/Observable';
@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
   token:string;
   users:Observable< any[]>;
    constructor(private authenticationService: AuthenticationService) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
        this.users =  this.authenticationService.getUserList();
        console.log(this.users);
    }
}
