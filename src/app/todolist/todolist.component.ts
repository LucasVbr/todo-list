import { Component, OnInit } from '@angular/core';
import TodoItem from '../../models/TodoItem';

const LOCAL_STORAGE_KEY: string = "todoList";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todoInput!: string;
  public todoList!: TodoItem[];

  ngOnInit() {
    this.todoInput = "";
    this.todoList = this.getSavedList();
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

  public clearList(): void {
    this.todoList = [];
    this.saveList();
  }

  public saveList() {
    console.info("Save todoList");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todoList))
  }

  private getSavedList(): TodoItem[] {
    console.info("Load TodoList");
    const loadedValues: string|null = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (loadedValues) return JSON.parse(loadedValues) as TodoItem[];
    return [];
  }

  private getNextIndex() {
    if (this.todoList.length === 0) return 1;
    return Math.max(...this.todoList.map(item => item.id)) + 1
  }
}
