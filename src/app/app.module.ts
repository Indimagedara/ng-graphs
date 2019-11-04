import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { PerformancechartComponent } from './components/performancechart/performancechart.component';
import { DynamicchartComponent } from './components/dynamicchart/dynamicchart.component';
import { HomeComponent } from './components/home/home.component';
import { GooglebarComponent } from './components/google/googlebar/googlebar.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { CanvasjsComponent } from './components/canvasjs/canvasjs.component';
import { GoogleComponent } from './components/google/google.component';
import { GooglepieComponent } from './components/google/googlepie/googlepie.component';
import { GoogleareaComponent } from './components/google/googlearea/googlearea.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PiechartComponent,
    PerformancechartComponent,
    DynamicchartComponent,
    HomeComponent,
    GooglebarComponent,
    CanvasjsComponent,
    GoogleComponent,
    GooglepieComponent,
    GoogleareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
