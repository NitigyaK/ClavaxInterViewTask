import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Service {

    constructor(private http: HttpClient) { }
    APIURL:any;
    
    get() {
      this.APIURL =  'assets/datasource.json'
      return this.http.get<any>(this.APIURL)
    }
}
