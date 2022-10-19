import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private http: HttpClient) {}
}
