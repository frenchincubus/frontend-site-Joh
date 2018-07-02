import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}


  getImages() {
    console.log('appel getImages');
    return this.http.get('http://localhost:8000/image/view_image')
    .map(
      (response: Response) => {
        const data = response.json();
        console.log('données reçues !');
        return data;
      }
    )
    .catch(
      (error: Response) => {

        return Observable.throw('Something went wrong :( ');
      }
    );
  }

  getDisques() {
    console.log('appel getDisques');
    return this.http.get('http://localhost:8000/image/view_disque')
    .map(
      (response: Response) => {
        const data = response.json();
        console.log('données reçues !');
        return data;
      }
    )
    .catch(
      (error: Response) => {

        return Observable.throw('Something went wrong :( ');
      }
    );
  }

}
