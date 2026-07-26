import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Task } from '../task-list-component/task-interface';


@Component({
  selector: 'app-task-card-component',
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './task-card-component.html',
  styleUrl: './task-card-component.css',
})
export class TaskCardComponent {
  task = input.required<Task>();
  createdAt = input<Date | null>();
  taskId = output<number>();
  taskItem = output<Task | null>();

  delete(id: number): void {
    this.taskId.emit(id);
  }

  enviarTask(task: any) {
    this.taskItem.emit(task);
  }
}
