import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ClockComponent } from "../clock-component/clock-component";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header-component',
  imports: [DatePipe, ClockComponent, RouterLink, RouterLinkActive],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  
  readonly titulo: string = 'Task Flow';
  readonly dataAtual: Date = new Date;

}
