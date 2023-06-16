import type TodoState from '../../models/TodoState.ts';
import clsx from 'clsx';
import {useDispatch} from 'react-redux';
import {checkTodo} from '../../features/todo/todoSlice.ts';

type Props = {
  todo: TodoState
}

export default function TodoItem({todo}: Props) {
  const dispatch = useDispatch();

  const handleCheck = () => dispatch(checkTodo(todo.id));

  return (
      <label className={clsx('TodoItem', 'shadow rounded-lg p-4 w-full flex items-center justify-between cursor-pointer')}>
        {todo.name}
        <input type={"checkbox"} onChange={handleCheck} checked={todo.checked} className={"checkbox checkbox-primary"}/>
      </label>
  );
}