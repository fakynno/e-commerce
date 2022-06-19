import { Book } from './model/book';

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable()

export class BookService {

  private apiServiceUrl = environment.apiUrl;

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.apiServiceUrl);
  }
}
