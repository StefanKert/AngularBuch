import { Book } from './../shared/book';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent {
  @Input() book: Book;
  @Output() showListEvent = new EventEmitter();

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }
}
