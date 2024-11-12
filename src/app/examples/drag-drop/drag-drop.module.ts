import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
    imports: [
        CommonModule,
        DragDropRoutingModule,
        CdkDrag,
        CdkDropList,
        NgFor,
        CdkDrag,
        CdkDragHandle,
        DragDropModule,
        DragDropComponent,
    ],
})
export class ExampleDragDropModule {}
