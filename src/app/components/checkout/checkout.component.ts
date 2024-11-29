import { Overlay } from '@angular/cdk/overlay';
import { Component, inject, output } from '@angular/core';
import { CLOSE_CHECKOUT } from '@lat-shared/store/action/checkout-panel-actions';
import { LATStore } from '@lat-shared/store/store';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  overlay = inject(Overlay);
  action = output<string>();
  store = LATStore;

  emitAction($action: string): void {
    this.action.emit($action);
    console.log('$action', $action);
    this.store.dispatch(CLOSE_CHECKOUT($action));
  }
}
