import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Task } from '../task-list-component/task-interface';
import { Router } from '@angular/router';
import { HighlightPriority } from "../../directives/highlight-priority";



@Component({
  selector: 'app-task-card-component',
  imports: [TitleCasePipe, DatePipe, HighlightPriority],
  templateUrl: './task-card-component.html',
  styleUrl: './task-card-component.css',
})
export class TaskCardComponent {

  private router = inject(Router);

  task = input.required<Task>();
  createdAt = input<Date | null>();
  taskId = output<number>();
  taskItem = output<Task | null>();


  delete(id: number): void {
    this.taskId.emit(id);
  }

  enviarTask(task: Task) {
    this.taskItem.emit(task);
  }

  goToTask(id: number, task: Task) {
    this.taskItem.emit(task);
    this.router.navigate(['task', id]);
  }
}
