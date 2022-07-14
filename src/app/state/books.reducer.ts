import { createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { retrivedBookList } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrivedBookList, (state, { books }) => books)
);
