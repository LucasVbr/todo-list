import TodoItemList from './TodoItemList.tsx';
import TodoAddItemForm from './TodoAddItemForm.tsx';
import TodoCardFooter from './TodoCardFooter.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../store.ts';
import clsx from 'clsx';

export default function TodoCard() {
  const todos = useSelector((state: RootState) => state.todo);

  return (
      <div className={clsx('TodoCard',
          'card max-w-6xl p-5 shadow-xl gap-7 bg-base-100')}>
        <TodoAddItemForm/>
        {todos.length > 0 && (
            <>
              <TodoItemList todos={todos}/>
              <TodoCardFooter/>
            </>
        )}

      </div>
  );
}