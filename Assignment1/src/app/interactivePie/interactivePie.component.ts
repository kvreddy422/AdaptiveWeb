import { Component, OnInit } from '@angular/core';
declare let d3: any;
declare let $: any;

@Component({
    selector: 'interactive-pie',
    styleUrls: ['./interactivePie.component.css'],
    templateUrl: './interactivePie.component.html'
})
export class InteractivePieComponent {
    public centerImage = 'assets/img/6.png';
    public centerImageEvent() {
    }

    public ngOnInit(){
    }

}