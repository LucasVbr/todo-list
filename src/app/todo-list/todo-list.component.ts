import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";
import {TodoItemService} from "../../services/todo-item.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems!: TodoItem[];

  constructor(private todoItemService: TodoItemService) {}
  ngOnInit(): void {
    this.todoItemService.loadItems();
    this.todoItems = this.todoItemService.todoItems;
  }
}
