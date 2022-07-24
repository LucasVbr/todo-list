export class TodoItem {
  constructor(
    public id: number,
    public text: string,
    public checked: boolean = false
  ) {}
}
