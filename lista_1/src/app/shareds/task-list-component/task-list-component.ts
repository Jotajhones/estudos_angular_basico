import { Component, OnInit, signal } from '@angular/core';
import { TaskCardComponent } from "../task-card-component/task-card-component";
import { Task } from './task-interface';

const MOCK_TASKS: Task[] = [
  { id: 0, title: 'Aprender Control Flow', status: 'pendente', priority: 'alta', assigneeId: 1 },
  { id: 1, title: 'Configurar Roteador', status: 'concluida', priority: 'media', assigneeId: 2 },
  { id: 2, title: 'Estudar Angular', status: 'aberta', priority: 'alta', assigneeId: 3 },
  { id: 3, title: 'Estudar java + Spring', status: 'aberta', priority: 'alta', assigneeId: 4 },
];

@Component({
  selector: 'app-task-list-component',
  imports: [TaskCardComponent],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent implements OnInit {

  mock = signal<Task[]>([]);
  createdAt = signal<Date | null>(null);

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.mock.set(MOCK_TASKS);
    this.createdAt.set(new Date());
  }

  delete(id: number): void {
    this.mock.update(lista => lista.filter(task => task.id !== id));
  }
}
