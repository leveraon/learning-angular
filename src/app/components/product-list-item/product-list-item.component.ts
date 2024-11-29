import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, output } from '@angular/core';
import { ProductQuickviewComponent } from '@at-components/product-quickview/product-quickview.component';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss',
})
export class ProductListItemComponent {
  dialog = inject(Dialog);

  action = output<void>();
  emitAction(): void {
    this.action.emit();
  }

  productQuickView(): void {
    const dialogRef = this.dialog.open<string>(ProductQuickviewComponent);

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
