import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-clock-component',
  imports: [DatePipe],
  templateUrl: './clock-component.html',
  styleUrl: './clock-component.css',
})
export class ClockComponent implements OnInit, OnDestroy {

  horaAtual = signal<Date>(new Date());
  intervalId: number = 0;


  ngOnInit(): void {

      this.intervalId = setInterval(() => {

        this.horaAtual.set(new Date());
      }, 1000);
    
  }

  ngOnDestroy(): void {
    
    clearInterval(this.intervalId);
  }
}
