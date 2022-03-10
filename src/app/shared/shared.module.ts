import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppVideoPosterComponent } from './app-video-poster/app-video-poster.component';
import { AppVideoTitleComponent } from './app-video-title/app-video-title.component';
import { AppVideoDescComponent } from './app-video-desc/app-video-desc.component';
import { ThumbnailVideoComponent } from './thumbnail-video/thumbnail-video.component';
import { VideoItemComponent } from './video-item/video-item.component';



@NgModule({
  declarations: [
    VideoItemComponent,
    AppVideoPosterComponent,
    AppVideoTitleComponent,
    AppVideoDescComponent,
    ThumbnailVideoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VideoItemComponent,
    AppVideoPosterComponent,
    AppVideoTitleComponent,
    AppVideoDescComponent,
    ThumbnailVideoComponent
  ],
})
export class SharedModule { }
