import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
})
export class MarkdownComponent implements OnInit {
  @Input()
  src: string = '';
  htmlElement = '# Marked in Node.js\n\nRendered by **marked**.';
  mardownContent: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    if (this.src && this.src !== '') {
      this.httpClient
        .get(this.src, {
          responseType: 'text',
        })
        .subscribe((response) => this.parseMarkdownFile(response));
    }
  }

  parseMarkdownFile(unsafeRawContent: string): void {
    const html = marked.parse(unsafeRawContent);
    this.mardownContent = sanitizeHtml(html.toString());
  }
}
