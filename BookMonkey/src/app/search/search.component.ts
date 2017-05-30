import { BookStoreService } from 'app/shared/book-store.service';
import { Book } from './../shared/book';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<Book>();

  keyUp = new EventEmitter<string>();

  foundBooks: Book[] = [];

  isLoading: boolean;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.keyUp
      .debounceTime(500)
      .distinctUntilChanged()
      .do(() => this.isLoading = true)
      .switchMap(searchTerm => this.bs.getAllSearch(searchTerm))
      .do(() => this.isLoading = false)
      .subscribe(books => this.foundBooks = books);
  }

}
