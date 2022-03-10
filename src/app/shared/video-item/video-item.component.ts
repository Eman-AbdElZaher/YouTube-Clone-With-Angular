import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from 'src/app/Models/video';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video:IVideo;

  constructor() { }

  ngOnInit(): void {
  }

}
