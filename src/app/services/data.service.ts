import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url="https://jsonblob.com/api/ba9a6010-0af0-11eb-af5c-f507d8b14e64";

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
  

}
