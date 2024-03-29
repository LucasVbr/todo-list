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
      <label className={clsx('TodoItem',
          'w-full p-4 rounded-lg cursor-pointer',
          'border-[1px] border-base-300 shadow',
          'flex items-center justify-between gap-5')}>
        <span className={"break-all"}>{todo.name}</span>
        <input type={'checkbox'} onChange={handleCheck} checked={todo.checked}
               className={'checkbox checkbox-primary'}/>
      </label>
  );
}