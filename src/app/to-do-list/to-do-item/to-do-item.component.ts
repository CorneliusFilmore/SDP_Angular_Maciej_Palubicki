import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem, TO_DO_ITEMS } from 'src/app/mocked-data';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  @Input() todoItem!: ToDoItem;

  @Output() itemToDelete: EventEmitter<ToDoItem> = new EventEmitter();
  @Output() itemStatusToChange: EventEmitter<ToDoItem> = new EventEmitter();

  newItem:string = "Nowy Element";
  todoItems:ToDoItem[] = TO_DO_ITEMS;

  deleteItem(): void {
    this.itemToDelete.emit(this.todoItem);
  }

  changeStatusOfItem(): void {
    if(this.todoItem.taskStatus=="Wykonano") {
      this.todoItem.taskStatus="Niewykonano";
    }else {
      this.todoItem.taskStatus="Wykonano";
    }
    this.itemStatusToChange.emit(this.todoItem)
  }
}
