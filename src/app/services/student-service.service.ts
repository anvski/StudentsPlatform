import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  private baseUrl = '??';

  constructor(private http: HttpClient) {}

  getStudentInfo(id: string) {
    //return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

}
