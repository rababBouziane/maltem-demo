import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:9090/movies';

  constructor(private http: HttpClient) { }

  getMovieByTitle(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${title}`);
  }

  addMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, movie);
  }

  updateMovie(title:string, movie: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${title}`, movie);
  }

  removeMovie(title: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${title}`, { responseType: 'text' });
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }}
