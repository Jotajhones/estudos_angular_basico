import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [DatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  
  readonly titulo: string = 'Task Flow';
  readonly dataAtual: Date = new Date;

}
