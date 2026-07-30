import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../service/user-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { map } from 'rxjs/operators';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { User } from '../../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-page',
  imports: [ReactiveFormsModule],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {

  userService = inject(UserService);


  usuario = new FormGroup({
    user: new FormControl<string | null>('', [Validators.required])
  });


  users = toSignal(
    this.userService.getUser().pipe(
      map(usuarios => usuarios.map(user => ({ id: user.id, name: user.name })))
    ),
    { initialValue: [] }
  );

}