import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = `${API_BASE_URL}api/all-movies`;
  private headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.authToken}`,
  };
  constructor(private httpClient: HttpClient) {}
  getMovies = () => this.httpClient.get(this.url, { headers: this.headers });
}
