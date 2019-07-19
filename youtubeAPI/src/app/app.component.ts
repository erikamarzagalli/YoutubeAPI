import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './services/youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  videos: any[];
  public unsubscribe: Subject<any> = new Subject();
  // public youtubeVideo = '';

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }


  ngOnInit() {
    this.videos = [];
    this.youTubeService.getVideosForChanel('basket')
      .pipe(takeUntil(this.unsubscribe)).subscribe(response => {
        for (const element of response.items) {
          this.videos.push(element);
        }
        console.log(response);
      });
  }

  public changeItem(event: string) {
    this.videos = [];
    this.youTubeService.getVideosForChanel(event)
    .pipe(takeUntil(this.unsubscribe)).subscribe(response => {
      for (const element of response.items) {
        this.videos.push(element);
      }
      console.log(response);
    });
  }



}
