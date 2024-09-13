import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnChanges {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();

  displayedColumns: string[] = ['title', 'author', 'action'];
  dataSource!: ReadonlyArray<Book>;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes['books'].currentValue;
  }
}
