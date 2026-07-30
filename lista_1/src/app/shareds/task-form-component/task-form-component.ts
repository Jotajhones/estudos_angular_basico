import { Component, effect, input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../model/task-interface';

@Component({
  selector: 'app-task-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.css',
})
export class TaskFormComponent {

  task = input<Task | null>(null);
  addNovaTask = output<Task>();
  updateTask = output<Task>();

  formulario = new FormGroup({
    id: new FormControl<number | null>(null),
    assigneeId: new FormControl<number | null>(null),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    status: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required])
  });

  constructor() {

    effect(() => {
      const tarefaRecebida = this.task();

      if (tarefaRecebida) {

        this.formulario.patchValue({
          id: tarefaRecebida.id,
          assigneeId: tarefaRecebida.assigneeId,
          title: tarefaRecebida.title,
          status: tarefaRecebida.status,
          priority: tarefaRecebida.priority
        });
      }
    });
  }

  limpar() {
    this.formulario.reset();
  }

  addTask(): void {

    if (this.formulario.valid) {
      const newTask = this.formulario.value as Task;
      this.addNovaTask.emit(newTask);
    }
  }

  updateMethod(): void {

    if (this.formulario.valid) {
      const newTask =  this.formulario.getRawValue() as Task;
      this.updateTask.emit(newTask);
      console.log(newTask)
    }
  }

}
