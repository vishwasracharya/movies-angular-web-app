import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

const API_BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private id = this.route.snapshot.paramMap.get('id');
  private url = `${API_BASE_URL}movie/${this.id}`;
  private headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.authToken}`,
  };
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}
  getMovie = () => this.httpClient.get(this.url, { headers: this.headers });
}
