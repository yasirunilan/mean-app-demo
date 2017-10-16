import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any = [];

  constructor(private tasksService: TaskService) { }

  ngOnInit() {
    // Retrieve tasks from the API
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
