import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'app/shared/book';
import { Thumbnail } from 'app/shared/thumbnail';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.bs.getAll().subscribe(res => this.books = res);
  }
}
