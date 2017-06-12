import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', loadChildren: 'app/book/book.module#BookModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [CanNavigateToAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
