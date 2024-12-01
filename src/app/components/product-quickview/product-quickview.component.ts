import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { PRODUCT_SIZE } from '@lat-shared/mock/product-size';

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [],
  templateUrl: './product-quickview.component.html',
  styleUrl: './product-quickview.component.scss',
})
export class ProductQuickviewComponent implements OnInit {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  productSizeOptions: { size: string; quantity: number; available: boolean }[] =
    [];

  ngOnInit(): void {
    this.productSizeOptions = Object.keys(PRODUCT_SIZE).map((key) => ({
      size: key,
      quantity: PRODUCT_SIZE[key].quantity,
      available: PRODUCT_SIZE[key].available,
    }));
  }

  addToCart(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
