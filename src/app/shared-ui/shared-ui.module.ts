import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from './shared-ui.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        SharedUiComponent,
    ],
    exports: [SharedUiComponent],
})
export class SharedUiModule {}
