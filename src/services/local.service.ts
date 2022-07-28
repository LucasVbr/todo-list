import { Injectable } from '@angular/core';
import TodoItem from "../models/todo-item.model";

@Injectable({
  providedIn: 'root'
})
export default class LocalService {

  static saveData(key: string, data: TodoItem[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getData(key: string): TodoItem[] | null {
    const data = localStorage.getItem(key);
    if (!data) return null

    return JSON.parse(data) as TodoItem[];
  }
}
