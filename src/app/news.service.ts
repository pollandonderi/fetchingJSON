import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
private url = "https://mocki.io/v1/92410f66-b69c-4a82-b26c-16cc8a70d6be"
  constructor(private httpClient: HttpClient) { }
  getnews(){
    return this.httpClient.get(this.url);
    }
}
