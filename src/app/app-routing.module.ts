import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTodoComponent } from "./components/todos-tab/add-todo/add-todo.component";
import { AddBookmarkComponent }
  from "./components/bookmarks-tab/add-bookmark/add-bookmark.component";
import { BookmarksComponent }
  from "./components/bookmarks-tab/bookmarks/bookmarks.component";
import { EditBookmarkComponent }
  from "./components/bookmarks-tab/edit-bookmark/edit-bookmark.component";
import { ManageBookmarksComponent }
  from "./components/bookmarks-tab/manage-bookmarks/manage-bookmarks.component";
import { AddNoteComponent }
  from "./components/notes-tab/add-note/add-note.component";
import { EditNoteComponent }
  from "./components/notes-tab/edit-note/edit-note.component";
import { NotesComponent } from "./components/notes-tab/notes/notes.component";
import { EditTodoComponent }
  from "./components/todos-tab/edit-todo/edit-todo.component";
import { TodosComponent } from "./components/todos-tab/todos/todos.component";

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarksComponent,
    children: [{ path: ':id', component: EditBookmarkComponent }]
  },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
