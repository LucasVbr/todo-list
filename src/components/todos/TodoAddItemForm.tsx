import {FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../features/todo/todoSlice.ts';
import {PlusIcon} from '@heroicons/react/24/outline';

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
          <div className={'join'}>
            <input type={'text'} value={name}
                   placeholder={'Type here your task...'}
                   className={'input border-primary w-full join-item'}
                   onChange={evt => setName(evt.target.value)}/>
            <button type={'submit'} className={'btn btn-square btn-primary join-item'}>
              <PlusIcon className={"h-6 w-6"}/>
            </button>
          </div>
        </div>
      </form>
  );

}
