import { Book } from './shared/book';
import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
