import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shared-ui',
  templateUrl: './shared-ui.component.html',
  styleUrls: ['./shared-ui.component.scss']
})
export class SharedUiComponent {


  @Output()
  action: EventEmitter<string> = new EventEmitter();


  performAction($event: string) {
    this.action.emit($event);
  }
}
