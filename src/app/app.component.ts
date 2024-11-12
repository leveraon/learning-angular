import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedUiComponent } from './shared-ui/shared-ui.component';

@Component({
  selector: 'app-root',
  template: `
    <app-shared-ui (action)="performAction($event)">
      <router-outlet></router-outlet>
    </app-shared-ui>
  `,
  standalone: true,
  imports: [RouterOutlet, SharedUiComponent],
})
export class AppComponent {
  title = 'learning-angular';
  constructor(private router: Router) {}

  performAction(action: string) {
    this.router.navigate([action]);
  }
}
