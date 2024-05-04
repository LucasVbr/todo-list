import TodoItem from './TodoItem.tsx';
import type TodoState from '../../models/TodoState.ts';
import clsx from 'clsx';

type Props = {
  todos: TodoState[]
}

export default function TodoItemList({todos}: Props) {
  return (
      <div className={clsx('TodoItemList', 'w-full flex flex-col gap-2')}>
        {todos.map((todo: TodoState, index) => <TodoItem todo={todo} key={index}/>)}
      </div>
  );
}
