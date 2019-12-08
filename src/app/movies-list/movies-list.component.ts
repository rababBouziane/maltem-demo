import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../movie";
import {Router} from "@angular/router";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.movies = this.movieService.findAll();
    //this.router.navigate(['movies']);

  }

  deleteMovie(title: string) {
    this.movieService.removeMovie(title)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateMovie(title: string){
    this.router.navigate(['update', title]);
  }
  //sorting
  key: string;
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
