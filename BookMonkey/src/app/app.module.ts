import { BookResolverService } from './shared/book-resolver.service';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import { AppRoutingModule } from './app-routing.module';
import { BookStoreService } from './shared/book-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BookStoreService,
    CanNavigateToAdminGuard,
    BookResolverService,
    { provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
