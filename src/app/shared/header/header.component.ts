import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  action = output<string>();

  emitAction(action: string): void {
    this.action.emit(action);
  }
}
