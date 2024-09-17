import { Component, inject, signal } from '@angular/core';
import { GoogleBooksService } from './books.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { single } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  title = 'learning-angular';
  private booksService: GoogleBooksService = inject(GoogleBooksService);
  private store: Store = inject(Store);
  private router: Router = inject(Router);
  constructor() {}

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  showProgress = signal(true);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
      this.showProgress.set(false);
    });
  }

  performAction(action: string) {
    this.router.navigate([action]);
  }
}
