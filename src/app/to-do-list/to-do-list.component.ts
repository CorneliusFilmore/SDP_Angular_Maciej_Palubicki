import { Component } from '@angular/core';
import { ToDoItem, TO_DO_ITEMS } from '../mocked-data';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  newItem:string = "Nowy Element";
  todoItems:ToDoItem[] = TO_DO_ITEMS;

  removeItem(item: ToDoItem): void {
    this.todoItems = this.todoItems.filter(e => e.text !== item.text);
  }

  sortNamesAlphabetical(): void {
    this.todoItems.sort((x,y) => x.text.toLowerCase().localeCompare(y.text.toLowerCase()));
  }

  changeItemStatus(item: ToDoItem): void {
    
  }

}
