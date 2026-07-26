import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-stats-component',
  imports: [],
  templateUrl: './task-stats-component.html',
  styleUrl: './task-stats-component.css',
})
export class TaskStatsComponent {

  totalPendentes = input<number>(0);
}
