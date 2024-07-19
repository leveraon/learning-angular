import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-icon-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './icon-search-bar.component.html',
  styleUrl: './icon-search-bar.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '200px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class IconSearchBarComponent {
  hide: boolean = true;

  buttonClicked() {
    this.hide = false;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
