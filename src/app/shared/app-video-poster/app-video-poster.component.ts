import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-poster',
  templateUrl: './app-video-poster.component.html',
  styleUrls: ['./app-video-poster.component.css']
})
export class AppVideoPosterComponent implements OnInit {
  @Input() videoImage:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
