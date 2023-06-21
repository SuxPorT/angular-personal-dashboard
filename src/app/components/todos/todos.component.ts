import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.todos[0].completed = true;
  }

  toggleCompleted(todo: Todo): void {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed });
  }

  onEditClick(todo: Todo): void {
    this.router.navigate(['/todos', todo.id]);
  }

  onDeleteClick(todo: Todo): void {
    this.todoService.deleteTodo(todo.id);
  }

}
