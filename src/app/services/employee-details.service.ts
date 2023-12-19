import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private http: HttpClient) { }
  getEmployeeList() : any {
    return this.http.get(`${environment.apiUrl}/empsDetails`);
  }
}
