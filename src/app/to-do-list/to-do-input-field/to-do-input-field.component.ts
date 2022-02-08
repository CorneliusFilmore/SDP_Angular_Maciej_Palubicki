import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem, TO_DO_ITEMS } from 'src/app/mocked-data';
import { ToDoListComponent } from '../to-do-list.component';

@Component({
  selector: 'app-to-do-input-field',
  templateUrl: './to-do-input-field.component.html',
  styleUrls: ['./to-do-input-field.component.css']
})
export class ToDoInputFieldComponent {
  newItem:string = "Nowy Element";
  
  
  @Input() todoItem!:ToDoItem;
  
  addNewItem():void {
    ToDoListComponent.todoItems.push({ text: this.newItem, taskStatus: "Niewykonano"});
    this.newItem = "";
  }
}
