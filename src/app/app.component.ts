import {Component, OnInit} from '@angular/core';
import TodoItem from "../models/todo-item.model";
import LocalService from "../services/local.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Todo List App';
  public list: TodoItem[] = [];

  private LOCAL_STORAGE_KEY = "todoList";
  inputValue: any;

  ngOnInit(): void {
    const savedData: null | TodoItem[] = LocalService.getData(this.LOCAL_STORAGE_KEY)
    if (savedData) this.list = savedData;
  }

  /**
   * Create a new item if input is not empty and the item doesn't exist already
   */
  addItem(): void {
    const listOfTodoText = this.list.map(item => item.text);

    if (this.inputValue && !listOfTodoText.includes(this.inputValue)) {
      this.list.push(new TodoItem(this.inputValue))
      this.inputValue = "";
      this.saveList();
    }
  }

  /**
   * Remove a specific item of the list
   * @param toRemove TodoItem to remove
   */
  removeItem(toRemove: TodoItem): void {
    this.list = this.list.filter(item => item !== toRemove);
    this.saveList();
  }

  /**
   * Remove all checked items of the list
   */
  removeCheckedItems(): void {
    this.list = this.list.filter(item => !item.checked)
    this.saveList();
  }

  private saveList(): void {
    LocalService.saveData(this.LOCAL_STORAGE_KEY, this.list);
  }

}
