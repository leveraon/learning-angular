import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, inject } from '@angular/core';
import { CheckoutComponent } from '@lat-components/checkout/checkout.component';
import { ProductFilterComponent } from '@lat-components/product-filter/product-filter.component';
import { ProductListItemComponent } from '@lat-components/product-list-item/product-list-item.component';
import { SignInComponent } from '@lat-components/sign-in/sign-in.component';
import { FooterComponent } from '@lat-shared/footer/footer.component';
import { HeaderComponent } from '@lat-shared/header/header.component';
import { CLOSE_CHECKOUT } from '@lat-shared/store/action/checkout-panel-actions';
import { LATStore } from '@lat-shared/store/store';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DialogModule,
    ProductListItemComponent,
    OverlayModule,
    ProductFilterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  dialog = inject(Dialog);
  overlay = inject(Overlay);
  store = LATStore;
  overlayRef = this.overlay.create();

  constructor() {
    this.store.subscribe(() => {
      const checkoutAction = this.store.getState().checkout.action;
      switch (checkoutAction) {
        case CLOSE_CHECKOUT.type:
          this.overlayRef.detach();
          break;

        default:
          break;
      }
    });
  }

  handleHeaderEvents(action: string): void {
    switch (action) {
      case 'search':
        const userProfilePortal = new ComponentPortal(ProductFilterComponent);
        this.overlayRef.attach(userProfilePortal);
        break;

      case 'signin':
        const dialogRef = this.dialog.open<string>(SignInComponent);

        dialogRef.closed.subscribe((result) => {
          console.log('The dialog was closed');
        });
        break;

      case 'checkout':
        const checkout = new ComponentPortal(CheckoutComponent);
        this.overlayRef.attach(checkout);
        break;

      default:
        break;
    }
  }
}
