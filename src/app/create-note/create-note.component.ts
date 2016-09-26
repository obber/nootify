import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService, IHttpResponse } from '../shared';

@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {

  public invalidErrors: Array<string> = [];
  public noteCreated: Boolean = false;

  constructor(private notes: NotesService) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.notes.postNote(f.value)
        .subscribe((resp: IHttpResponse) => {
          if (resp.success) {
            this.notes.getNotes();
            this.noteCreated = true;

            setTimeout(() => {
              this.noteCreated = false;
            }, 3000);
          }
        });
      return;
    }
    
    if (!f.value.title) {
      this.invalidErrors.push('Please provide a note title.')
    }

    if (!f.value.content) {
      this.invalidErrors.push('Please provide note contents');
    }
  }
}
