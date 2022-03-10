import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/Models/video';
import videos from 'src/assets/AppData/Videos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:IVideo[]=videos;
  constructor() { }

  ngOnInit(): void {
  }

}
