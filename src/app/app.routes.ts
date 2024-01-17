import { Routes } from '@angular/router';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: ':id', component: ViewItemComponent },
  { path: '', component: HomeComponent },
];
