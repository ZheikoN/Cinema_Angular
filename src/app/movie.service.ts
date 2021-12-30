import { Injectable } from '@angular/core';
import { Movie } from './movie';
//import { MOVIES } from './mock-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    const movie = this.httpClient.get<Movie>(`https://college-movies.herokuapp.com`);
    this.messageService.add(`We grabbed Movie with ID of ${id}`);
    return movie;
  }


  getMovies(): Observable<Movie[]> {

    const movies = this.httpClient.get<Movie[]>('https://college-movies.herokuapp.com/');
    this.messageService.add('the Movie service fetched the movies')
    return movies;
  }
}
