import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  },
  {
    path: 'movies',
    redirectTo: ''
  },
  {
    path: 'movies/:id',
    component: MoviesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
