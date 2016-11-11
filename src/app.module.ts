import 'zone.js';
import 'reflect-metadata';
import 'rxjs';

import { NgModule } from 'angular-core';
import { BrowserModule }  from 'angular-platform-browser';
import { FormsModule } from 'angular-forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ FormsModule, BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
