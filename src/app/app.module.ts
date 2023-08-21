import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/app.home.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({ //module that registered components
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    OrderComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule, //importing the module for [(ngModel)]
    AppRoutingModule //importing the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
