import { Component } from '@angular/core';
import { ToDoItem, TO_DO_ITEMS } from '../mocked-data';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  newItem:string = "Nowy Element";
  static todoItems:ToDoItem[] = TO_DO_ITEMS;

  removeItem(item: ToDoItem): void {
    ToDoListComponent.todoItems = ToDoListComponent.todoItems.filter(e => e.text !== item.text);
  }

  sortNamesAlphabetical(): void {
    ToDoListComponent.todoItems.sort((x,y) => x.text.toLowerCase().localeCompare(y.text.toLowerCase()));
  }

  sortByCategory(): void {
    ToDoListComponent.todoItems.sort((x,y) => x.category.toLowerCase().localeCompare(y.category.toLowerCase()));
  }

  sortByStatus(): void {
    ToDoListComponent.todoItems.sort((x,y) => x.taskStatus.toLowerCase().localeCompare(y.taskStatus.toLowerCase()));
  }

  changeItemStatus(item: ToDoItem): void {}

  getToDoItems(): ToDoItem[] {
    return ToDoListComponent.todoItems
  }
}
