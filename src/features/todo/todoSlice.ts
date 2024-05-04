import TodoState from '../../models/TodoState.ts';
import {createSlice} from '@reduxjs/toolkit';
import todoState from '../../models/TodoState.ts';

const savedTodos: string | null = localStorage.getItem('todos');
const initialState: TodoState[] = savedTodos ? JSON.parse(savedTodos) : [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: TodoState = {
        id: Date.now(),
        name: action.payload,
        checked: false,
      };

      state.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    checkTodo: (state, action) => {
      const id: number = action.payload;

      const todo: TodoState | undefined = state.find(
          (todo: todoState) => todo.id === id,
      );
      if (todo === undefined) return;

      todo.checked = !todo.checked;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteSelectedTodos: (state) => {
      const newState = state.filter((todo: TodoState) => !todo.checked);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
  },
});

export const {addTodo, checkTodo, deleteSelectedTodos} = todoSlice.actions;
export default todoSlice.reducer;
