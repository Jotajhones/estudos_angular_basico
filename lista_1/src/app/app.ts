import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shareds/header-component/header-component";
import { TaskListComponent } from "./shareds/task-list-component/task-list-component";
import { About } from "./shareds/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TaskListComponent, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
title = 'brincadeirinhas';
}
