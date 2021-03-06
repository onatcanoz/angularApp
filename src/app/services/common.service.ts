import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonModel } from '../models/_index';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl: string;

  constructor(private http: HttpClient) {
   this.apiUrl = environment.ApiBaseUrl; 
  }

  getList() {
    return this.http.get<any[]>(this.apiUrl + 'foods');
  }
  
}


