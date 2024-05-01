import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from './shared-ui.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SharedUiComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    SharedUiComponent
  ]
})
export class SharedUiModule { }
