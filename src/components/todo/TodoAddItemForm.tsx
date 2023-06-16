import {FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../features/todo/todoSlice.ts';

export default function TodoAddItemForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!name) return;
    dispatch(addTodo(name));
    setName("");
  };

  return (
      <form onSubmit={handleSubmit} className={'TodoAddItemForm'}>
        <div className={'form-control'}>
          <div className={'input-group'}>
            <input type={'text'} value={name} placeholder={'Type here your task...'}
                   className={'input input-bordered w-full'}
                   onChange={evt => setName(evt.target.value)}
            />
            <button type={'submit'} className={'btn btn-square'}>
              <img className={'h-6 w-6'} src={'/icons/plus.svg'}
                   alt="Plus icon"/>
            </button>
          </div>
        </div>
      </form>
  );

}