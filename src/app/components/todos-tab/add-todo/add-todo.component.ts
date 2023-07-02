import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { NotificationService } from 'src/app/services/notification.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  showValidationErrors: boolean = false;

  constructor(
    private router: Router,
    private todoService: TodoService,
    private notificationService: NotificationService
  ) { }

  onFormSubmit(form: NgForm): boolean | undefined {
    if (form.invalid) return this.showValidationErrors = true;

    const todo = new Todo(form.value.text);

    this.todoService.addTodo(todo);
    this.router.navigateByUrl('/todos');
    this.notificationService.show('Todo created!');

    return;
  }

}
