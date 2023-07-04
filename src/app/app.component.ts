import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  news: any;
  constructor(private service: NewsService){}
  ngOnInit(): void {
    this.service.getnews().subscribe((response) => {
      this.news = response;
    });
  }
  title = 'fetching JSON';
}
