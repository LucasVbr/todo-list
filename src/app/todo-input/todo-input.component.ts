import { Component, OnInit } from '@angular/core';
import {TodoItemService} from "../../services/todo-item.service";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  textInput: string = "";

  constructor(private todoItemService: TodoItemService) { }
  ngOnInit(): void {}

  createTodoItem(): void {
    if (this.textInput) {
      this.todoItemService.newItem(this.textInput);
      this.textInput = "";
    }
  }
}
