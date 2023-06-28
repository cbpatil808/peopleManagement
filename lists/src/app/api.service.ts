import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataModel } from './people/dataModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/people";

  constructor(private http: HttpClient) { }
  //add 
  addpeople(data: dataModel) {
    return this.http.post<dataModel>("http://localhost:3000/people", data);
  }

  //get
  getpeople() {
    return this.http.get<dataModel[]>("http://localhost:3000/people");
  }

  //fetch data
  fetchdata(id: number) {
    return this.http.get<dataModel>("http://localhost:3000/people/" + id);
  }

  //delete
  deletepeople(id: number) {
    return this.http.delete<dataModel>("http://localhost:3000/people/" + id)
  }

  //update
  updatepeople(data: dataModel, id: number) {
    return this.http.put<dataModel>("http://localhost:3000/people/" + id, data);
  }

}
