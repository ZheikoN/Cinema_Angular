import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
//import { MOVIES } from '../mock-movies';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie?: Movie;


  

  constructor(private movieService: MovieService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(x => {
      console.log(`this is what you subscribed for:`, x);
      this.movies = x;
  })
  }

  onSelected(movie: Movie): void{
    this.messageService.add(`You selected ${movie.title} with id of ${movie.id}`)
    console.log(movie);
    this.selectedMovie = movie;
  }

}
