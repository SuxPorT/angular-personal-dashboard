import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('This is a test!'),
    new Todo('Hey!')
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: string): Todo | undefined {
    return this.todos.find(t => t.id === id);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  updateTodo(id: string, updateTodoFields: Partial<Todo>): void {
    const todo = this.getTodo(id);

    if (todo)
      Object.assign(todo, updateTodoFields);
  }

  deleteTodo(id: string): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index == -1) return;

    this.todos.splice(index, 1);
  }

}
