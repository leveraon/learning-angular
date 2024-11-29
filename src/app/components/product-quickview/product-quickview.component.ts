import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [],
  templateUrl: './product-quickview.component.html',
  styleUrl: './product-quickview.component.scss',
})
export class ProductQuickviewComponent {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
