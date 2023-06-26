import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note!: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')!;

      if (!idParam) return;

      this.note = this.noteService.getNote(idParam)!;
    });
  }

  onFormSubmit(form: NgForm): void {
    this.noteService.updateNote(this.note.id, form.value);
    this.router.navigateByUrl("/notes");
    this.notificationService.show('Note updated!');
  }

  deleteNote(): void {
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl("/notes");
    this.notificationService.show('Note deleted!');
  }

}
