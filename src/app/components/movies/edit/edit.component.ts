import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE_URL = environment.apiUrl;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  movie: any;
  editMovie(event: any) {
    console.log(event);
  }
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

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
