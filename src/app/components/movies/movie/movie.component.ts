import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieService } from './movie.service';

const API_BASE_URL = environment.apiUrl;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: any;
  isMovieAvailable = false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const url = `${API_BASE_URL}api/movie/${id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.authToken}`,
    };
    this.httpClient.get(url, { headers }).subscribe((data) => {
      this.movie = data;
    });
  }
}
