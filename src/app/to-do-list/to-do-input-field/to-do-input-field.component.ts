import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem, TO_DO_ITEMS } from 'src/app/mocked-data';

@Component({
  selector: 'app-to-do-input-field',
  templateUrl: './to-do-input-field.component.html',
  styleUrls: ['./to-do-input-field.component.css']
})
export class ToDoInputFieldComponent {
  newItem:string = "Nowy Element";
  todoItems:ToDoItem[] = TO_DO_ITEMS;

  @Input() todoItem!:ToDoItem;
  @Output() itemToDelete: EventEmitter<ToDoItem> = new EventEmitter();
  
  addNewItem():void {
    this.todoItems.push({ text: this.newItem, taskStatus: "Niewykonano"});
    this.newItem = "";
  }
}
