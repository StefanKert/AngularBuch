import { BookStoreService } from './book-store.service';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/shared/book';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class BookResolverService implements Resolve<Book> {

  constructor(private bs: BookStoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    return this.bs.getSingle(route.params['isbn']);
  }
}
