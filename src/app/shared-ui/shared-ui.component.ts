import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Feature } from '../shared-model/feature';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { NgTemplateOutlet } from '@angular/common';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListSubheaderCssMatStyler, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';

@Component({
    selector: 'app-shared-ui',
    templateUrl: './shared-ui.component.html',
    styleUrls: ['./shared-ui.component.scss'],
    standalone: true,
    imports: [
        MatDrawerContainer,
        MatDrawer,
        MatList,
        MatListSubheaderCssMatStyler,
        MatListItem,
        MatIcon,
        MatListItemIcon,
        MatListItemTitle,
        MatButton,
        MatMiniFabButton,
        MatDrawerContent,
        NgTemplateOutlet,
    ],
})
export class SharedUiComponent implements OnInit {
  @Output()
  action: EventEmitter<string> = new EventEmitter();

  @ViewChild('drawer')
  drawer!: MatDrawer;

  features: Feature[] = [];

  ngOnInit(): void {
    this.buildFeatures();
  }

  buildFeatures(): void {
    Promise.all([fetch('assets/data/features.json')]).then(
      async ([features]) => {
        this.features = await features.json();
      }
    );
  }

  performAction($event: string) {
    this.action.emit($event);
    this.drawer.toggle();
  }
}
