import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { FormsModule } from '@angular/forms';
import { ToDoItemComponent } from './to-do-list/to-do-item/to-do-item.component';
import { ToDoInputFieldComponent } from './to-do-list/to-do-input-field/to-do-input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoInputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
