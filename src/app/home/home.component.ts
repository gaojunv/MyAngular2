import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
   token:string;

    constructor() {
        this.token = localStorage.getItem('token');
    }

    ngOnInit() {
        alert("login!");
    }
}
