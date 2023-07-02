import { Injectable, OnDestroy } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy {

  todos: Todo[] = [];
  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent(window, 'storage')
      .subscribe((event: any) => {
        if (event.key === 'todos') this.loadState();
      });
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: string): Todo | undefined {
    return this.todos.find(t => t.id === id);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id: string, updateTodoFields: Partial<Todo>): void {
    const todo = this.getTodo(id);

    if (todo)
      Object.assign(todo, updateTodoFields);

    this.saveState();
  }

  deleteTodo(id: string): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index == -1) return;

    this.todos.splice(index, 1);
    this.saveState();
  }

  saveState(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadState(): void {
    try {
      const todosInStorage = JSON.parse(localStorage.getItem('todos')!);

      this.todos.length = 0; // Clear the todos array (while keeping the reference)
      this.todos.push(...todosInStorage);
    } catch (e) {
      console.log('There was an error retrieving the todos from localStorage');
      console.log(e);
    }
  }

}
