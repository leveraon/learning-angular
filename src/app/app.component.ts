import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-shared-ui (action)="performAction($event)">
      <router-outlet></router-outlet>
    </app-shared-ui>
  `,
})
export class AppComponent {
  title = 'angular-ngrx-demo';
  constructor(private router: Router) {}

  performAction(action: string) {
    this.router.navigate([action]);
  }
}
