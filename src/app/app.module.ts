import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AddTodoComponent } from './components/todos-tab/add-todo/add-todo.component';
import { AddBookmarkComponent }
  from './components/bookmarks-tab/add-bookmark/add-bookmark.component';
import { BookmarkTileComponent }
  from './components/bookmarks-tab/bookmark-tile/bookmark-tile.component';
import { BookmarksComponent }
  from './components/bookmarks-tab/bookmarks/bookmarks.component';
import { EditBookmarkComponent }
  from './components/bookmarks-tab/edit-bookmark/edit-bookmark.component';
import { ManageBookmarksComponent }
  from './components/bookmarks-tab/manage-bookmarks/manage-bookmarks.component';
import { AddNoteComponent }
  from './components/notes-tab/add-note/add-note.component';
import { EditNoteComponent }
  from './components/notes-tab/edit-note/edit-note.component';
import { NoteCardComponent }
  from './components/notes-tab/note-card/note-card.component';
import { NotesComponent }
  from './components/notes-tab/notes/notes.component';
import { NotificationComponent }
  from './components/notification/notification.component';
import { EditTodoComponent }
  from './components/todos-tab/edit-todo/edit-todo.component';
import { TodoItemComponent }
  from './components/todos-tab/todo-item/todo-item.component';
import { TodosComponent } from './components/todos-tab/todos/todos.component';

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
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent
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
