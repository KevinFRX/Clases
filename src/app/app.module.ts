import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { AppRouter } from './app.router';


@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    SharedModule,
    AppRouter
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }