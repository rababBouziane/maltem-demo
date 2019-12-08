import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie";
import {MovieService} from "../movie.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: Observable<Movie[]>;
  movie: Movie = new Movie();
  submitted = false;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
    this.reloadData();

  }

  save() {
    this.movieService.addMovie(this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
    this.reloadData();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.movies = this.movieService.findAll();
    this.router.navigate(['movies']);

  }
}
