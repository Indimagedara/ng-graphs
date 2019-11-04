import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlearea',
  templateUrl: './googlearea.component.html',
  styleUrls: ['./googlearea.component.css']
})
export class GoogleareaComponent implements OnInit {

  title = 'Area Chart';
   type = 'AreaChart';
   data = [
      ["2013", 1000, 400],
      ["2014", -1170, 460],
      ["2015", 660, 1120],
      ["2016", 1030, 540]
   ];
   columnNames = ['Year', 'Sales',"Expenses"];
   options = { };
   width = 550;
   height = 400;

  constructor() { }

  ngOnInit() {
  }

}
