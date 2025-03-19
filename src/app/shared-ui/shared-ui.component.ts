import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListSubheaderCssMatStyler,
} from '@angular/material/list';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Feature } from '../shared-model/feature';

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
    MatDrawerContent,
    MatToolbarModule,
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
