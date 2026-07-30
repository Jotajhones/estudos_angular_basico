import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  
  private http = inject(HttpClient);
  private url: string = "https://jsonplaceholder.typicode.com/users";

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
