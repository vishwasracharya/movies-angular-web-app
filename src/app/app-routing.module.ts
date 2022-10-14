import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent as AddMovie } from './components/movies/add/add.component';
import { EditComponent } from './components/movies/edit/edit.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { RentComponent } from './components/movies/rent/rent.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'add-movie', component: AddMovie },
  { path: 'edit-movie/:id', component: EditComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'movie/rent/:id', component: RentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
