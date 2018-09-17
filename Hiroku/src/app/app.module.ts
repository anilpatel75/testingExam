import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { RoutingModule } from './routing/routing.module';
import { MyServiceService } from './my-service.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyServiceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
