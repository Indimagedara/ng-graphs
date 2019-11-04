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

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PiechartComponent,
    PerformancechartComponent,
    DynamicchartComponent,
    HomeComponent,
    GooglebarComponent
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
