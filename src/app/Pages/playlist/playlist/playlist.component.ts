import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IVideo } from 'src/app/Models/video';
import WatchVideos from 'src/assets/AppData/Watch.json';
import LikedVideos from 'src/assets/AppData/Liked.json';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlistType:string;
  Playlistvideos:IVideo[];
  lastImg:string;
  title:string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.playlistType=params.get('list');
    });
     this.title = this.playlistType === "WL"?"Watch Later":"Liked Videos";
     this.Playlistvideos=this.getPlaylistVideosBasedOnType();
    this.lastImg = this.Playlistvideos[0].image;
  }
  getPlaylistVideosBasedOnType():IVideo[]{
    let playlist:IVideo[];
    if(this.playlistType === "WL"){
      playlist= WatchVideos;
    }
    if(this.playlistType == "LL"){
      playlist= LikedVideos;
    }
    return playlist;
  }
}
