import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component';
import {TaskService} from './task.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'postsviewurl',
    pathMatch: 'full'
  },
  {
    path: 'postsviewurl',
    component: PostsComponent
  },
  {
    path: 'tasksviewurl',
    component: TaskComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
