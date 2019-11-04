import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlebar',
  templateUrl: './googlebar.component.html',
  styleUrls: ['./googlebar.component.css']
})
export class GooglebarComponent implements OnInit {
  title = 'Browser market shares at a specific website, 2014';
  type='PieChart';
  data = [
    ['Firefox', 40.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 5.7] 
 ];
 columnNames = ['Browser', 'Percentage'];
 options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], 
      is3D: false
    };
  height = 370;
  constructor() { }

  ngOnInit() {
  }

}
