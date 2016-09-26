import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotesService {

  // local variables
  url: string = '/api/notes';
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  latestNotes: Array<any> = [];

  constructor(private http: Http) {}

  mapResponse(resp) {
    return resp.json();
  }

  handleError(err) {
    console.error('error in NotesService HTTP request. err = ', err);
    return err.json();
  }

  getNotes() {
    return this.http.get(this.url)
      .map(this.mapResponse)
      .catch(this.handleError)
      .subscribe((resp: IHttpResponse) => {
        if (resp.success && resp.results) {
          this.latestNotes = resp.results;
        }
      });
  }

  postNote(body) {
    return this.http.post(this.url, body, this.options)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

}

export interface IHttpResponse {
  success: boolean,
  response?: Array<Object>
  results?: Array<Object>
}