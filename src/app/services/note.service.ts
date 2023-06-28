import { Injectable, OnDestroy } from '@angular/core';
import { Note } from '../models/note.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy {

  notes: Note[] = [];
  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: any) => {
      if (event.key === 'notes') this.loadState();
    });
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getNotes(): Note[] {
    return this.notes;
  }

  getNote(id: string): Note | undefined {
    return this.notes.find(n => n.id === id);
  }

  addNote(note: Note): void {
    this.notes.push(note);

    this.saveState();
  }

  updateNote(id: string, updatedFields: Partial<Note>): void {
    const note = this.getNote(id);

    if (note)
      Object.assign(note, updatedFields);

    this.saveState();
  }

  deleteNote(id: string): void {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if (noteIndex == -1) return;

    this.notes.splice(noteIndex, 1);

    this.saveState();
  }

  saveState(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadState(): void {
    try {
      const notesInStorage = JSON.parse(localStorage.getItem('notes')!);

      this.notes.length = 0; // Clear the notes array (while keeping the reference)
      this.notes.push(...notesInStorage);
    } catch (e) {
      console.log('There was an error retrieving the notes from localStorage');
      console.log(e);
    }
  }

}
