import {Component, OnInit} from '@angular/core';
import TodoItem from '../models/TodoItem';

const LOCAL_STORAGE_KEY: string = "todoList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Todo List App';
  public todoInput!: string;
  public todoList!: TodoItem[];

  ngOnInit() {
    this.todoInput = "";
    this.todoList = this.getSavedList();
  }

  private getSavedList(): TodoItem[] {
    console.info("Load TodoList");

    const loadedValues: string|null = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (loadedValues) return JSON.parse(loadedValues) as TodoItem[];
    return [];
  }

  public saveList() {
    console.info("Save todoList");

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todoList))
  }

  public addItem(): void {
    if (!this.todoInput) return;

    const newItem: TodoItem = new TodoItem(this.getNextIndex(), this.todoInput);
    this.todoList.push(newItem);
    this.todoInput = "";

    this.saveList();
  }

  public removeItem(index: number): void {
    this.todoList = this.todoList.filter(item => {
      return item.id !== index;
    });
    this.saveList();
  }

  private getNextIndex() {
    if (this.todoList.length === 0) return 1;
    return Math.max(...this.todoList.map(item => item.id)) + 1
  }
}
