import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DemoHomePageRoutingModule } from './demo-home-page-routing.module';
import { DemoHomePageComponent } from './demo-home-page.component';


@NgModule({
  declarations: [
    DemoHomePageComponent
  ],
  imports: [
    CommonModule,
    DemoHomePageRoutingModule,
    MatButtonModule,
    MatGridListModule,
    
  ]
})
export class DemoHomePageModule { }
