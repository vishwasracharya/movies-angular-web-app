import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent as AddMovie } from './components/movies/add/add.component';
import { EditComponent } from './components/movies/edit/edit.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { RentComponent } from './components/movies/rent/rent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule) 
  },
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'add-movie', component: AddMovie },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'movie/edit/:id', component: EditComponent },
  { path: 'movie/rent/:id', component: RentComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
