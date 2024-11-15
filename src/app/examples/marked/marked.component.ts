import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from './markdown/markdown.component';

@Component({
  selector: 'app-marked',
  standalone: true,
  imports: [MatTabsModule, MarkdownComponent],
  templateUrl: './marked.component.html',
  styleUrl: './marked.component.scss',
})
export class MarkedComponent {}
