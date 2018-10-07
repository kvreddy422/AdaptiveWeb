import { Component, OnInit } from '@angular/core';
declare let d3: any;
declare let $: any;

@Component({
    selector: 'doughnut-chart',
    styleUrls: ['./donutChart.component.css'],
    templateUrl: './donutChart.component.html'
})
export class DoughnutChart1Component {
    public centerImage = 'assets/img/6.png';
    public votes = JSON.parse(localStorage.getItem('currentUser')).count;
    public upvotes = JSON.parse(localStorage.getItem('currentUser')).upvotes;
    public downvotes = JSON.parse(localStorage.getItem('currentUser')).downvotes;
    public piedata = [{
        id: 0,
        label: 'votes',
        value: this.votes,
        color: 'red',
    }, {
        id: 1,
        label: 'upvote',
        value: this.upvotes,
        color: 'blue',
    }, {
        id: 2,
        label: 'downvote',
        value: this.downvotes,
        color: 'green',
    }];

    public centerImageEvent() {
    }

    public ngOnInit(){
    }

}