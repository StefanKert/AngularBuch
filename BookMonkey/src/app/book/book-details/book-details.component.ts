import { BookFactory } from './../../shared/book-factory';
import { Book } from './../../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookStoreService } from 'app/shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();

  constructor(private bs: BookStoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['isbn']).subscribe(res => this.book = res);
  }

  getRating(num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen')) {
      this.bs.remove(this.book).subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }

  }
}
