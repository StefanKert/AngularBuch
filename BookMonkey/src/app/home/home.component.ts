import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  bookSelected(book: Book){
    this.router.navigate(['../books', book.isbn], {relativeTo: this.route})
  }
}
