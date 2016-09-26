import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotesService } from './shared';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightContentComponent } from './right-content/right-content.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    LeftSidebarComponent,
    RightContentComponent,
    CreateNoteComponent,
    AllNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
