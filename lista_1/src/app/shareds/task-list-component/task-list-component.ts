import { Component, computed, effect, inject, OnInit, output, Signal, signal } from '@angular/core';
import { TaskCardComponent } from "../task-card-component/task-card-component";
import { Task } from './task-interface';
import { TaskStatsComponent } from "../task-stats-component/task-stats-component";
import { TaskFormComponent } from "../task-form-component/task-form-component";


const MOCK_TASKS: Task[] = [
  { id: 0, title: 'Aprender Control Flow', status: 'pendente', priority: 'alta', assigneeId: 0 },
  { id: 1, title: 'Configurar Roteador', status: 'concluida', priority: 'media', assigneeId: 1 },
  { id: 2, title: 'Estudar Angular', status: 'aberta', priority: 'alta', assigneeId: 2 },
  { id: 3, title: 'Estudar java + Spring', status: 'aberta', priority: 'alta', assigneeId: 3 },
];

@Component({
  selector: 'app-task-list-component',
  imports: [TaskCardComponent, TaskStatsComponent, TaskFormComponent],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent implements OnInit {

  mock = signal<Task[]>([]);
  createdAt = signal<Date | null>(null);
  pendentes = computed(() => this.mock().filter(t => t.status === 'pendente').length);
  selectedTask = signal<Task | null>(null);

  constructor() {

    effect(() => {
      this.save(this.mock());
    });
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.mock.set(MOCK_TASKS);
    this.createdAt.set(new Date());

  }

  delete(id: number): void {
    this.mock.update(lista => lista.filter(task => task.id !== id));
  }

  save(lista: Task[]): void {
    localStorage.setItem('TaskFlow', JSON.stringify(lista));
  }

  receberTask(task: Task | null) {
    const item: Task = task as Task;
    this.selectedTask.set(item);
  }

  addNovaTask(task: Task) {

    if (task) {
      const last = this.mock().at(-1)?.id;
      task.id = last ? last + 1 : 1;
      task.assigneeId = task.id;
      this.mock.update(itens => [...itens, task]);
    }
  }

  updateTask(task: Task) {
    if (task) {
      this.mock.update(lista =>
        lista.map(item => item.id === task.id ? task : item)
      );
    }
  }


}
