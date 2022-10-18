import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const url = `${environment.apiUrl}api/movie/${id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.authToken}`,
    };
    this.httpClient.get(url, { headers }).subscribe((data) => {
      this.movie = data;
    });
  }

}
