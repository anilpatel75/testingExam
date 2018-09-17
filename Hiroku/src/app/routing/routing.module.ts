import { AddComponent } from './../add/add.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { MainComponent } from '../main/main.component';
  const routingApp:Routes=[{
    path:"", component:MainComponent
  },
  {path:'main',component:MainComponent},
    {path:'add',component:AddComponent}
]
@NgModule({
  imports: [
      RouterModule.forRoot(routingApp)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
