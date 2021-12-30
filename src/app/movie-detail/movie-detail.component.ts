import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie? : Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMovie();
    
  }
  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe(x => this.movie = x);
  }

goBack(): void{
  this.location.back();
}
 

}
