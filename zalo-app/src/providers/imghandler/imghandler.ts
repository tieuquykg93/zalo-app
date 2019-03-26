import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImghandlerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ImghandlerProvider Provider');
  }

}
