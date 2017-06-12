import { Book } from './../../shared/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a.bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styles: []
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() { }
}
