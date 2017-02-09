import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';
import { Observable } from 'rxjs/Observable';
@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
   token:string;
   users:any[];
   cols: any[];
    constructor(private authenticationService: AuthenticationService) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
        this.authenticationService.getUserList().then(users => this.users = users);
        this.cols = [
            {field: 'username', header: '用户名', sortable: 'true'},
            {field: 'email', header: '邮箱', sortable: 'true'},
            {field: 'firstname', header: '姓氏', sortable: 'true'},
            {field: 'lastname', header: '名字', sortable: 'true'}
        ];
    }
}
