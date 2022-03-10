import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from 'src/app/Models/video';

@Component({
  selector: 'app-thumbnail-video',
  templateUrl: './thumbnail-video.component.html',
  styleUrls: ['./thumbnail-video.component.css']
})
export class ThumbnailVideoComponent implements OnInit {
 @Input() video:IVideo;
  constructor() { }

  ngOnInit(): void {
  }

}
