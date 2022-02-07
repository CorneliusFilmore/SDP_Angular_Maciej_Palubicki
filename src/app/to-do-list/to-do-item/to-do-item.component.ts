import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from 'src/app/mocked-data';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  @Input() todoItem!: ToDoItem;

  @Output() itemToDelete: EventEmitter<ToDoItem> = new EventEmitter();

  deleteItem(): void {
    this.itemToDelete.emit(this.todoItem);
  }
}
