import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Modelo/Todo';
import { User } from '../Modelo/User';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  todo!: Todo;
  user!: User;

  Url = 'http://localhost:8080/omc/todos';
  UrlU = 'http://localhost:8080/omc/users';

  getTodo() {
    return this.http.get<Todo[]>(this.Url);
  }
  getUser() {
    return this.http.get<User[]>(this.UrlU);
  }

  public get(url: string) {
    return this.http.get(url);
  }
  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.Url, todo);
  }
  createUser(user: User) {
    return this.http.post<User>(this.UrlU, user);
  }
  getTodoId(id: number) {
    return this.http.get<Todo>(this.Url + '/' + id);
  }
  updatedTodo(todo: Todo) {
    return this.http.put<Todo>(this.Url + '/' + todo.id, todo);
  }
  deleteTodo(todo: Todo) {
    return this.http.delete<Todo>(this.Url + '/' + todo.id);

  }
}
