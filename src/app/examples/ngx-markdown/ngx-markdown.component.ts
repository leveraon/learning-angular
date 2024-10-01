import { Component, SecurityContext } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-ngx-markdown',
  standalone: true,
  imports: [MarkdownModule, MatTabsModule],
  templateUrl: './ngx-markdown.component.html',
  styleUrl: './ngx-markdown.component.scss',
  providers: [
    provideMarkdown({
      sanitize: SecurityContext.NONE,
    }),
  ],
})
export class NgxMarkdownComponent {}
