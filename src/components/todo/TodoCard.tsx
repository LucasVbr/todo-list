import TodoItemList from './TodoItemList.tsx';
import TodoAddItemForm from './TodoAddItemForm.tsx';
import TodoCardFooter from './TodoCardFooter.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../store.ts';

export default function TodoCard() {
  const todos = useSelector((state: RootState) => state.todo);

  return (
      <div className={'TodoCard card bg-base-100 shadow-xl p-5 gap-7 transition ease-in-out delay-150'}>
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