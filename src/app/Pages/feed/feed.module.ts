import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryPageComponent } from './library-page/library-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {path:"",redirectTo:'/feed/library',pathMatch:'full'},
  {path: 'history', component: HistoryPageComponent},
  {path: 'library', component: LibraryPageComponent}
];

@NgModule({
  declarations: [
    LibraryPageComponent,
    HistoryPageComponent,
    SubscriptionPageComponent,
    ExplorePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[HistoryPageComponent]
})
export class FeedModule { }
