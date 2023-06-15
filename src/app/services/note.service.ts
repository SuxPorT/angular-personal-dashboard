import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [];

  constructor() { }

  getNotes(): Note[] {
    return this.notes;
  }

  getNote(id: string): Note | undefined {
    return this.notes.find(n => n.id === id);
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>): void {
    const note = this.getNote(id);

    if (note)
      Object.assign(note, updatedFields);
  }

  deleteNote(id: string): void {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if (noteIndex == -1) return;

    this.notes.splice(noteIndex, 1);
  }
}
