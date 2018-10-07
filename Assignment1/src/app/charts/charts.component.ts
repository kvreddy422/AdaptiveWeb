import { Chart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-charts',
    templateUrl: 'charts.component.html'
})
export class ChartComponent {
    chart = new Chart({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Linechart'
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'Line 1',
                data: [1, 2, 3]
            }
        ]
    });

    // add point to chart serie
    add() {
        this.chart.addPoint(Math.floor(Math.random() * 10));
    }
}