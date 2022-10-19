import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthHttpService } from './auth-http.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthModel } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private authHttpService: AuthHttpService,
    private cookieService: CookieService
  ) {}

  login(auth: AuthModel) {}
}
