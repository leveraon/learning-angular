import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    MatDatepickerInput,
    MatDatepicker,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ExpandPanelComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion();
}
