import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Feature } from '../shared-model/feature';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-shared-ui',
  templateUrl: './shared-ui.component.html',
  styleUrls: ['./shared-ui.component.scss'],
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
