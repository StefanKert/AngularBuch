import { BookResolverService } from './../shared/book-resolver.service';
import { BookFormComponent } from './book-form/book-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BookFormComponent },
  {
    path: ':isbn', component: BookFormComponent, resolve: {
      book: BookResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
