import { Component, OnInit } from '@angular/core';

import { NotesService, IHttpResponse } from '../shared';

@Component({
  selector: 'all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {

  constructor(public notes: NotesService) { }

  ngOnInit() {
    this.notes.getNotes();
  }

}