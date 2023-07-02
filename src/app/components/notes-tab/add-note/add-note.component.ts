import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {

  showValidationErrors: boolean = false;

  constructor(
    private router: Router,
    private noteService: NoteService,
    private notificationService: NotificationService
  ) { }

  onFormSubmit(form: NgForm): boolean | undefined {
    if (form.invalid) return this.showValidationErrors = true;

    const note = new Note(form.value.title, form.value.content);

    this.noteService.addNote(note);
    this.router.navigateByUrl("/notes");
    this.notificationService.show('Note created!');

    return;
  }

}
