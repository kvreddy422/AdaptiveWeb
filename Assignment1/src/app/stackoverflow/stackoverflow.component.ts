import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'stackoverflow.component.html'
})

export class StackoverflowComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    currentUser: User;
    users: User[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
        var x = JSON.parse(localStorage.getItem('currentUser'));
        x.count=x.count+1;
        localStorage.setItem('currentUser',JSON.stringify(x));
        var y = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < y.length; i++) {
            if(y[i].id==x.id){ y[i].count=x.count; localStorage.setItem('users',JSON.stringify(y));
            }}
    }
    nCnt: number = 0;
    clickMe() {
        this.nCnt = this.nCnt + 1;
    }
    clickEventDownvote(){
        var x = JSON.parse(localStorage.getItem('currentUser'));
        x.downvotes=x.downvotes+1;
        localStorage.setItem('currentUser',JSON.stringify(x));
        var y = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < y.length; i++) {
            if(y[i].id==x.id){ y[i].downvotes=x.downvotes; localStorage.setItem('users',JSON.stringify(y));
            }}
    }
    clickEventUpvote(){
        var x = JSON.parse(localStorage.getItem('currentUser'));
        x.upvotes=x.upvotes+1;
        localStorage.setItem('currentUser',JSON.stringify(x));
        var y = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < y.length; i++) {
            if(y[i].id==x.id){ y[i].upvotes=x.upvotes; localStorage.setItem('users',JSON.stringify(y));
            }}
    }

    ngOnInit() {
    }

}
