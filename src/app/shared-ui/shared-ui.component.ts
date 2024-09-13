import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Feature } from '../shared-model/feature';

@Component({
  selector: 'app-shared-ui',
  templateUrl: './shared-ui.component.html',
  styleUrls: ['./shared-ui.component.scss'],
})
export class SharedUiComponent implements OnInit {
  @Output()
  action: EventEmitter<string> = new EventEmitter();

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
  }
}
