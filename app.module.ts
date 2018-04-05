import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { FilterPipe }from './filter.pipe';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import $ from "jquery";




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


