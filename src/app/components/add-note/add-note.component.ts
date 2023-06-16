import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {

  constructor(private noteService: NoteService, private router: Router) { }

  onFormSubmit(form: NgForm) {
    console.log(form);

    if (form.invalid) return alert("Form is invalid!");

    const note = new Note(form.value.title, form.value.content);

    this.noteService.addNote(note);
    this.router.navigateByUrl("/notes");
  }

}
