import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoHomePageRoutingModule } from './demo-home-page-routing.module';
import { DemoHomePageComponent } from './demo-home-page.component';

@NgModule({
  declarations: [DemoHomePageComponent],
  imports: [CommonModule, DemoHomePageRoutingModule],
})
export class DemoHomePageModule {}
