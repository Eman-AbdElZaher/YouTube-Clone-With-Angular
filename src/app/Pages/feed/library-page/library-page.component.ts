import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/Models/video';
import historyVideos from 'src/assets/AppData/History.json';
import WatchVideos from 'src/assets/AppData/Watch.json';
@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  videos:IVideo[]= this.getFirstData(historyVideos);
  WatchVideos:IVideo[]=this.getFirstData(WatchVideos);
  likedVideos=[];
  constructor() { }

  ngOnInit(): void {
  }
 getFirstData(arr:any):IVideo[]{
   let videos=[];
   if(arr.length > 3){
     videos= arr.slice(0, 4);
   }
   else {
     videos= [...arr];
   }
   return videos;
 }
}
