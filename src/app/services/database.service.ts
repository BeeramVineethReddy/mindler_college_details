import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { College } from './College';


@Injectable({
  providedIn: 'root'
})
export class  DatabaseService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/college/"


  getColleges()
  {
    return this.http.get<College[]>(this.url);
  }
}