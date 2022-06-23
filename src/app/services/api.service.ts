import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  getUserdata() {
    let url=environment.apiDomain + 'api/users?page=1'
    return this.httpclient.get(url);
  }
  
}

