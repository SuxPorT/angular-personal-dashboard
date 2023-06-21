import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotesComponent } from './components/notes/notes.component';
import { BookmarkTileComponent } from './components/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
