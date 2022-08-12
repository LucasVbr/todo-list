export default class TodoItem {
  public completed: boolean;

  constructor(public id: number, public task: string) {
    this.completed = false;
  }
}
