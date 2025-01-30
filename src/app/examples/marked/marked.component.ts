import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from './markdown/markdown.component';
import { MarkdownToolbarComponent } from '../markdown-toolbar/markdown-toolbar.component';

@Component({
  selector: 'app-marked',
  standalone: true,
  imports: [MatTabsModule, MarkdownComponent, MarkdownToolbarComponent],
  templateUrl: './marked.component.html',
  styleUrl: './marked.component.scss',
})
export class MarkedComponent {
  markdownContent: string = '';
  @ViewChild('markdownInput') markdownInputRef!: ElementRef;

  updateMarkdown(markdown: string) {
    this.markdownContent = markdown;
  }
}
