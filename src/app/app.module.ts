import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddComponent } from './components/movies/add/add.component';
import { EditComponent } from './components/movies/edit/edit.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { RentComponent } from './components/movies/rent/rent.component';
import { ListUsersComponent } from './components/account/list-users/list-users.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieCardComponent } from './components/home/movie-card/movie-card.component';
import { AccessDeniedComponent } from './_shared/components/access-denied/access-denied.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    AddComponent,
    EditComponent,
    MovieComponent,
    RentComponent,
    ListUsersComponent,
    ProfileComponent,
    HomeComponent,
    PageNotFoundComponent,
    MovieCardComponent,
    AccessDeniedComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
