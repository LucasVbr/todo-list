import {useDispatch, useSelector} from 'react-redux';
import {deleteSelectedTodos} from '../../features/todo/todoSlice.ts';
import {RootState} from '../../store.ts';
import TodoState from '../../models/TodoState.ts';

export default function TodoCardFooter() {

  const dispatch = useDispatch();
  const selectedTodosCount: number = useSelector(
      (state: RootState) => state.todo.filter(
          (todo: TodoState) => !todo.checked
      ).length
  );

  const handleDelete = () => dispatch(deleteSelectedTodos());

  return (
      <div className={'flex justify-between items-center gap-5'}>
        <p>You have {selectedTodosCount} pending task(s)</p>
        <button onClick={handleDelete} className={'btn btn-error'}>Clear
        </button>
      </div>
  );
}
