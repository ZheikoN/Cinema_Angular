import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent},  
  { path: 'contact', component: ContactComponent},
{ path: '', redirectTo: '/contact', pathMatch: 'full'},
{ path: 'detail/:id', component: MovieDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
