import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
