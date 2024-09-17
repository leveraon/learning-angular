import { NgModule } from '@angular/core';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BookCollectionComponent } from './book-collection.component';
import { BookListComponent } from './book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BooksComponent } from './books.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookCollectionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    BooksRoutingModule,
    MatProgressBarModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class BooksModule {}
