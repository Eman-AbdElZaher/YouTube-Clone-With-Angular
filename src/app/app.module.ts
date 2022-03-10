import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeHeaderComponent } from './components/Layouts/youtube-header/youtube-header.component';
import { AsideNavComponent } from './components/Layouts/aside-nav/aside-nav.component';
import { HomeComponent } from './Pages/Home-page/home.component';
import { PageNotFoundComponent } from './Pages/NotFound-page/page-not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeHeaderComponent,
    AsideNavComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
