import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllTasks() {
    return this.http.get('/tasks')
      .map(res => res.json());
  }
}
