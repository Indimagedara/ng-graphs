import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer",{
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Sample Pie chart"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping"},
          { y: 250, name: "Others" }
        ]
      }]
    });
    chart.render();
  }

}
