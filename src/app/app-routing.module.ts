import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    data: { tab: 1 }
  },
  {
    path: 'todos',
    component: TodosComponent,
    data: { tab: 2 }
  },
  { path: 'todos/add', component: AddTodoComponent },
  {
    path: 'notes',
    component: NotesComponent,
    data: { tab: 3 }
  },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
