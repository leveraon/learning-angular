import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, inject, OnInit } from '@angular/core';
import { CheckoutComponent } from '@at-components/checkout/checkout.component';
import { ProductFilterComponent } from '@at-components/product-filter/product-filter.component';
import { ProductListItemComponent } from '@at-components/product-list-item/product-list-item.component';
import { SignInComponent } from '@at-components/sign-in/sign-in.component';
import { FooterComponent } from '@at-shared/footer/footer.component';
import { HeaderComponent } from '@at-shared/header/header.component';
import { CLOSE_CHECKOUT } from '@at-shared/store/action/checkout-panel-actions';
import { ATStore } from '@at-shared/store/store';

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
export class LandingComponent implements OnInit {
  dialog = inject(Dialog);
  overlay = inject(Overlay);
  store = ATStore;
  overlayRef = this.overlay.create();

  constructor() {}

  ngOnInit(): void {
    this.store.subscribe(() => {
      const checkoutAction = this.store.getState().checkout.action;
      console.log('checkoutAction', checkoutAction);
      switch (checkoutAction) {
        case CLOSE_CHECKOUT.type:
          this.overlayRef.detach();
          break;

        default:
          console.log('checkoutAction', checkoutAction);
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
