import {Injectable} from "@angular/core";
import {TodoItem} from "../models/todo-item.model";

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  todoItems: TodoItem[] = [];

  get nextId(): number {
    return this.todoItems.length + 1
  }

  getById(id: number): TodoItem {
    const todoItem = this.todoItems.find(item => item.id === id);
    if (!todoItem) throw new Error('Todo item not found!');
    return todoItem;
  }

  newItem(text: string): void {
    const newTodoItem: TodoItem = new TodoItem(this.nextId, text);
    this.todoItems.push(newTodoItem);

    this.saveItems()
  }

  checkById(id: number, checked: boolean) {
    this.todoItems[id - 1].checked = checked;
    this.saveItems()
  }

  loadItems() {
    const saveDataRaw: any = localStorage.getItem("todoList");

    if (saveDataRaw as string) this.todoItems = JSON.parse(saveDataRaw);
  }

  saveItems() {
    localStorage.setItem("todoList", JSON.stringify(this.todoItems))
  }
}
