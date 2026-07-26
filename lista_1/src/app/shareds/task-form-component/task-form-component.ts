import { Component, effect, input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../task-list-component/task-interface';

@Component({
  selector: 'app-task-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.css',
})
export class TaskFormComponent {

  task = input<Task | null>(null);
  addNovaTask = output<any>();

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

  addTask() {

    if(this.formulario) {

      const newTask = this.formulario.value;
      this.addNovaTask.emit(newTask);
      console.log(newTask);
    }
  }

}
