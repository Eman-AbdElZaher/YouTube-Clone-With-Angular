import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-desc',
  templateUrl: './app-video-desc.component.html',
  styleUrls: ['./app-video-desc.component.css']
})
export class AppVideoDescComponent implements OnInit {
 @Input() videoDesc:string;
  constructor() { }

  ngOnInit(): void {
  }

}
