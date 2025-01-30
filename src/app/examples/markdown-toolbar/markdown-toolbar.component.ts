// markdown-toolbar.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-markdown-toolbar',
  templateUrl: './markdown-toolbar.component.html',
  styleUrls: ['./markdown-toolbar.component.css'],
  standalone: true,
})
export class MarkdownToolbarComponent implements AfterViewInit, OnDestroy {
  @Input() targetElementRef:
    | ElementRef<HTMLTextAreaElement | HTMLInputElement>
    | undefined;

  @Output() formatApplied = new EventEmitter<string>();
  private inputElement: HTMLTextAreaElement | HTMLInputElement | null = null;

  ngAfterViewInit(): void {
    this.inputElement = this.targetElementRef?.nativeElement ?? null;
    if (!this.inputElement) {
      console.warn('No input element provided to the markdown toolbar.');
    }
  }
  ngOnDestroy(): void {
    this.inputElement = null;
  }

  insertText(
    text: string,
    startOffset: number = 0,
    endOffset: number = 0
  ): void {
    if (!this.inputElement) {
      return;
    }

    const selectionStart = this.inputElement.selectionStart || 0;
    const selectionEnd = this.inputElement.selectionEnd || 0;
    const originalValue = this.inputElement.value;

    const beforeText = originalValue.substring(0, selectionStart);
    const selectedText = originalValue.substring(selectionStart, selectionEnd);
    const afterText = originalValue.substring(selectionEnd);

    this.inputElement.value = `${beforeText}${text.substring(
      0,
      startOffset
    )}${selectedText}${text.substring(endOffset)}`;

    this.inputElement.focus();

    const newCursorPosition =
      selectionStart +
      text.substring(0, startOffset).length +
      selectedText.length +
      text.substring(endOffset).length;
    this.inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
    this.formatApplied.emit(this.inputElement.value);
  }

  bold() {
    this.insertText('**', 2);
  }
  italic() {
    this.insertText('*', 1);
  }
  heading(level: number) {
    this.insertText(`${'#'.repeat(level)} `, `${'#'.repeat(level)} `.length);
  }
  ulist() {
    this.insertText('- ', 2);
  }
  olist() {
    this.insertText('1. ', 3);
  }

  link() {
    const url = prompt('Enter the URL');
    if (url) {
      this.insertText(`[${'link text'}](${url})`, 1, 12);
    }
  }
  image() {
    const imageUrl = prompt('Enter the Image URL');
    if (imageUrl) {
      this.insertText(`![${'alt text'}](${imageUrl})`, 2, 11);
    }
  }
}
