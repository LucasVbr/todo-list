import TodoItem from './TodoItem.tsx';
import type TodoState from '../../models/TodoState.ts';

type Props = {
  todos: TodoState[]
}

export default function TodoItemList({todos}: Props) {
  return (
      <div className={'TodoItemList w-full flex flex-col gap-2'}>
        {todos.map((todo: TodoState, index) => <TodoItem todo={todo} key={index}/>)}
      </div>
  );
}