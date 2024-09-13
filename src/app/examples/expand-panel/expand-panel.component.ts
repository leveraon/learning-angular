import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss']
})
export class ExpandPanelComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
}
