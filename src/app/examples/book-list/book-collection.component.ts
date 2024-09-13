import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

  displayedColumns: string[] = ['title', 'author', 'action'];
  dataSource!: ReadonlyArray<Book>;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes['books'].currentValue;
  }
}
