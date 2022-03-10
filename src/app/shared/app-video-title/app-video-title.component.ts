import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-title',
  templateUrl: './app-video-title.component.html',
  styleUrls: ['./app-video-title.component.css']
})
export class AppVideoTitleComponent implements OnInit {
  @Input () videoTitle:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
