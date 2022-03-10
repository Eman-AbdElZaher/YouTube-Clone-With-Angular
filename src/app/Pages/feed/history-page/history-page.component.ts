import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/Models/video';
import historyVideos from 'src/assets/AppData/History.json';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  videos:IVideo[]= historyVideos;
  constructor() { }

  ngOnInit(): void {
  }

}
