import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BookCollectionComponent } from './book-collection.component';
import { BookListComponent } from './book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BooksComponent } from './books.component';

@NgModule({ declarations: [BooksComponent, BookListComponent, BookCollectionComponent], imports: [CommonModule,
        MatButtonModule,
        BooksRoutingModule,
        StoreModule.forRoot({
            books: booksReducer,
            collection: collectionReducer,
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class BooksModule {}
