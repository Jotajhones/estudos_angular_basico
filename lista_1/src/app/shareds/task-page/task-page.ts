import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Task } from '../task-list-component/task-interface';
import { TaskCardComponent } from '../task-card-component/task-card-component';

@Component({
  selector: 'app-task-page',
  imports: [],
  templateUrl: './task-page.html',
  styleUrl: './task-page.css',
})
export class TaskPage implements OnInit{

  // private card = inject(TaskCardComponent);

  readonly id = input.required<number>()

  task = signal<Task | null>(null);

  ngOnInit(): void {
    // this.receber();
  }

  receber() {
    // console.log(this.card.taskItem);
  }

}
