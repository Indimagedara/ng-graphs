import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { PerformancechartComponent } from './components/performancechart/performancechart.component';
import { DynamicchartComponent } from './components/dynamicchart/dynamicchart.component';
import { GooglebarComponent } from './components/google/googlebar/googlebar.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bar', component: BarchartComponent},
  {path: 'pie', component: PiechartComponent},
  {path: 'performace', component: PerformancechartComponent},
  {path: 'dynamic', component: DynamicchartComponent},
  {path: 'googlebar',component:GooglebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
