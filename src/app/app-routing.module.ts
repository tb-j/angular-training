import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './tv/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowDetailsComponent } from './tv/show-details/show-details.component';
import { ShowDetailsResolver } from './tv/show-details/show-details.resolver';
import { LoggedInGuard } from './auth/logged-in.guard';
import { HasRolesGuard } from './auth/has-roles.guard';

export interface ShowDetailsParams {
  showId: string;
}

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv', component: SearchComponent},
  {
    path: 'tv/:showId',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver
    },
    data: {
      roles: ['admin', 'editor']
    },
    canActivate: [
      LoggedInGuard,
      HasRolesGuard,
    ]
  },
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  // providers: [ShowDetailsResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
