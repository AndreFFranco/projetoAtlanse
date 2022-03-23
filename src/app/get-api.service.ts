import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  apiCall() {
    return this.http.get('https://gitlab.com/api/v4/projects/23781207');
  }
}
