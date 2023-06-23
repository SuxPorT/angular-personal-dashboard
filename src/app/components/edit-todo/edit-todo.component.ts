import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo!: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id')!;

      this.todo = this.todoService.getTodo(todoId)!;
    });
  }

  onFormSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.todoService.updateTodo(this.todo.id, form.value);
    this.router.navigateByUrl("/todos");
  }

}
