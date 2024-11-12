import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { MatDatepickerInput, MatDatepicker } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
@Component({
    selector: 'app-expand-panel',
    templateUrl: './expand-panel.component.html',
    styleUrls: ['./expand-panel.component.scss'],
    standalone: true,
    imports: [MatButton, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIcon, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepicker]
})
export class ExpandPanelComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
}
