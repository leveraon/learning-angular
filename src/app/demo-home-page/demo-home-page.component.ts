import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-home-page',
  templateUrl: './demo-home-page.component.html',
  styleUrls: ['./demo-home-page.component.scss']
})
export class DemoHomePageComponent {


  constructor(
    private router: Router,
  ) {

  }


  performAction(action: string) {
    this.router.navigate(['drag']);
  }
}
