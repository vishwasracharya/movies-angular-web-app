import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;
  isMovieAvailable = false;

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe((data) => {
      this.movies = data;
      if (this.movies.length > 0) {
        this.isMovieAvailable = true;
      }
    });
  }
}
