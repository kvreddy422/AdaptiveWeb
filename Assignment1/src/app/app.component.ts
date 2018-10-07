import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor() {
        var y = [{
            "firstName": "Vaibhav",
            "lastName": "Kalakota",
            "username": "vk",
            "password": "123456",
            "id": "1",
            "count": "15",
            "upvotes": "6",
            "downvotes": "7"
        },{
            "firstName": "aaa",
            "lastName": "aaa",
            "username": "aaa",
            "password": "123456",
            "id": "2",
            "count": "25",
            "upvotes": "10",
            "downvotes": "8"
        },{
            "firstName": "bbb",
            "lastName": "bbb",
            "username": "bbb",
            "password": "123456",
            "id": "3",
            "count": "8",
            "upvotes": "2",
            "downvotes": "1"
        },{
            "firstName": "ccc",
            "lastName": "ccc",
            "username": "ccc",
            "password": "123456",
            "id": "3",
            "count": "33",
            "upvotes": "20",
            "downvotes": "2"
        }]
        localStorage.setItem('users',JSON.stringify(y))
    }
}