import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookStoreService } from 'app/shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bs: BookStoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.book = this.bs.getSingle(params['isbn']);
  }

  getRating(num: number) {
    return new Array(num);
  }
}
