
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http: HttpClient) { }

    // tslint:disable-next-line:ban-types
    getVideosForChanel(stringa: String): Observable<any> {
      const apiKey = 'AIzaSyBb7EOP5HdQJygWlwxsNziQmbGfvZVWJ3U';
      const search = stringa;
      const maxResults = 10;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&
      q=${search}&key=${apiKey}&maxResults=${maxResults}`;
      return this.http.get<any>(url);
  }
}
