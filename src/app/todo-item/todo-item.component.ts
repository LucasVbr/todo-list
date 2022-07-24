import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";
import {TodoItemService} from "../../services/todo-item.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: TodoItem

  constructor(private todoItemService: TodoItemService) {}
  ngOnInit(): void {}

  check() {
    this.todoItem.checked = !this.todoItem.checked;
    this.todoItemService.checkById(this.todoItem.id, this.todoItem.checked)
  }

}
