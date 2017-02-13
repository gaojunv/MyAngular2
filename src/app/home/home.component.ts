import { Component, OnInit } from '@angular/core';
import { UserService, AlertService } from '../services';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    token: string;
    users: any[];
    oldUsers: any[];
    cols: any[];
    constructor(private userService: UserService ,private alertService: AlertService) {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
        this.userService.getUserList()
        .then(
            users => { 
                this.users = users; 
                this.oldUsers = JSON.parse(JSON.stringify(this.users)) 
            },
            error => {
                this.alertService.error('请求失败',error);
            });
        this.cols = [
            { field: 'username', header: '用户名', sortable: true, editable: true },
            { field: 'email', header: '邮箱', sortable: false, editable: true },
            { field: 'firstname', header: '姓氏', sortable: false, editable: false },
            { field: 'lastname', header: '名字', sortable: true, editable: false }
        ];
    }

    showUsers() {
        console.log(this.users);
        console.log(this.oldUsers);
    }

    resetUsers() {
        this.users = JSON.parse(JSON.stringify(this.oldUsers));
    }
}
