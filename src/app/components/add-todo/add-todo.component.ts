import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  showValidationErrors: boolean = false;

  constructor(private todoService: TodoService, private router: Router) { }

  onFormSubmit(form: NgForm): boolean | undefined {
    if (form.invalid) return this.showValidationErrors = true;

    const todo = new Todo(form.value.text);

    this.todoService.addTodo(todo);
    this.router.navigateByUrl('/todos');

    return;
  }

}
