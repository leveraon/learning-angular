import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CdkDrag,
  CdkDropList
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';

@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    CommonModule,
    DragDropRoutingModule,
    CdkDrag,
    CdkDropList, NgFor, CdkDrag
  ]
})
export class DragDropModule { }
