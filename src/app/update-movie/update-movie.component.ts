import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Movie} from "../movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  title: string;
  movie: Movie;

  constructor(private route: ActivatedRoute,private router: Router,
              private movieService: MovieService) { }

  ngOnInit() {
    this.movie = new Movie();

    this.title = this.route.snapshot.params['title'];

    this.movieService.getMovieByTitle(this.title)
      .subscribe(data => {
        console.log(data)
        this.movie = data;
      }, error => console.log(error));
  }

  updateMovie() {
    this.movieService.updateMovie(this.title, this.movie)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },error => console.log(error));
  }

  onSubmit() {
    this.updateMovie();
  }

  reloadData() {
    this.router.navigate(['/movies']);
    this.movieService.findAll();
  }

}
