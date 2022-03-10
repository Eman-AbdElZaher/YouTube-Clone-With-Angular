import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home-page/home.component';
import { PageNotFoundComponent } from './Pages/NotFound-page/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {path: 'feed', loadChildren: () => import('./Pages/feed/feed.module').then(m => m.FeedModule)},
  {path: 'playlist', loadChildren: () => import('./Pages/playlist/playlist.module').then(m => m.PlaylistModule)},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
