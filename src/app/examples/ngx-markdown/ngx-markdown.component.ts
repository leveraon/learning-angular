import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  SecurityContext,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  MarkdownComponent,
  MarkdownModule,
  provideMarkdown,
} from 'ngx-markdown';
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
export class NgxMarkdownComponent implements OnInit {
  @ViewChild('scrollableContent', { static: true })
  scrollableContent!: ElementRef;

  ngOnInit(): void {
    // Example: Let's say you want to add a delay before scrolling
    const scrollDelay = 500; // 500 milliseconds

    // Attach an event listener to the scrollbar click
    this.scrollableContent.nativeElement.addEventListener(
      'click',
      (event: any) => {
        // Prevent default scrolling
        event.preventDefault();

        // Get the scroll position you want to go to (example: 50% of the content)
        const targetScrollPosition =
          this.scrollableContent.nativeElement.scrollHeight * 0.5;

        // Set a timeout to simulate a delay
        setTimeout(() => {
          // Use scrollTo() method to move the scroll position
          this.scrollableContent.nativeElement.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });
        }, scrollDelay);
      }
    );
  }
}
