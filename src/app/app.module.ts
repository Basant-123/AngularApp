import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from  './Components/header/header.component';
import {FooterComponent }  from './Components/footer/footer.component';

import {BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaxInfoComponent } from './pax-info/pax-info.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { Ng2CompleterModule } from 'ng2-completer';
import {  HttpClientModule } from "@angular/common/http";

import { PaxInfo2Component } from './pax-info2/pax-info2.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { MbscModule } from '@mobiscroll/angular-lite';
import { ModifyRouteComponentComponent } from './modify-route-component/modify-route-component.component';
const appRoutes : Routes = [
  {path : 'app' ,component : AppComponent},
  {path : 'home' ,component : HomeComponent},
  { path : 'pax-info',component : PaxInfoComponent},
  { path : 'pax-info2',component : PaxInfo2Component},
  { path : 'modify-route-component', component : ModifyRouteComponentComponent},
  { path : '' , redirectTo:'/app',pathMatch : 'full'}
//page Not Found
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaxInfoComponent,
    HomeComponent,
    PaxInfo2Component,
    ModifyRouteComponentComponent,

  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,             
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
   RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
   Ng2CompleterModule,
   HttpClientModule,
   NgxTypeaheadModule,
   MbscModule
      // <----- import for date formating(optional)     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
