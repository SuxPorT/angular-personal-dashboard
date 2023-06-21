import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo!: Todo;

  @Output() editClick: EventEmitter<void> = new EventEmitter();
  @Output() deleteClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  onEditClick(): void {
    this.editClick.emit();
  }

  onDeleteClick(): void {
    this.deleteClick.emit();
  }

}
