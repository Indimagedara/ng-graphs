import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { PerformancechartComponent } from './components/performancechart/performancechart.component';
import { DynamicchartComponent } from './components/dynamicchart/dynamicchart.component';
import { GooglebarComponent } from './components/google/googlebar/googlebar.component';
import { CanvasjsComponent } from './components/canvasjs/canvasjs.component';
import { GoogleComponent } from './components/google/google.component';
import { GooglepieComponent } from './components/google/googlepie/googlepie.component';
import { GoogleareaComponent } from './components/google/googlearea/googlearea.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bar', component: BarchartComponent},
  {path: 'pie', component: PiechartComponent},
  {path: 'performace', component: PerformancechartComponent},
  {path: 'dynamic', component: DynamicchartComponent},
  {path: 'googlebar',component:GooglebarComponent},
  {path: 'canvas', component: CanvasjsComponent},
  {path: 'google', component: GoogleComponent},
  {path: 'googlepie',component: GooglepieComponent},
  {path: 'googlearea', component: GoogleareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
