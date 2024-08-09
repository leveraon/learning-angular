import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface FeatureExample {
  title: string;
  path: string;
}

@Component({
  selector: 'app-shared-ui',
  templateUrl: './shared-ui.component.html',
  styleUrls: ['./shared-ui.component.scss'],
})
export class SharedUiComponent implements OnInit {
  @Output()
  action: EventEmitter<string> = new EventEmitter();

  features: FeatureExample[] = [];

  ngOnInit(): void {
    this.buildFeatures();
  }

  buildFeatures(): void {
    this.features = [
      {
        title: 'Drag & Drop (CDK)',
        path: 'drag',
      },
      {
        title: ' Expand Panel (Materials)',
        path: 'expand-panel',
      },
      {
        title: 'Book List (NgRX)',
        path: 'book-list',
      },
      {
        title: ' Search Bar (Animations)',
        path: 'search-bar',
      },
      {
        title: ' Plot (ObserbaleHQ)',
        path: 'plot-chart',
      },
      {
        title: 'Checkbox Tree (CDK)',
        path: 'checkbox-tree',
      },
    ];
  }

  performAction($event: string) {
    this.action.emit($event);
  }
}
