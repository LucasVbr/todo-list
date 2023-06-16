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
                   className={'input border-primary w-full'}
                   onChange={evt => setName(evt.target.value)}
            />
            <button type={'submit'} className={'btn btn-square btn-primary'}>

              {/*Plus icon*/}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                   fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 4v16m8-8H4"/>
              </svg>

            </button>
          </div>
        </div>
      </form>
  );

}