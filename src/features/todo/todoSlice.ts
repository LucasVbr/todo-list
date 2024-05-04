import TodoState from '../../models/TodoState.ts';
import {createSlice} from '@reduxjs/toolkit';
import todoState from '../../models/TodoState.ts';

const initialState: TodoState[] = [];

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
    },
    checkTodo: (state, action) => {
      const id: number = action.payload;

      const todo: TodoState | undefined = state.find(
          (todo: todoState) => todo.id === id,
      );
      if (todo === undefined) return;

      todo.checked = !todo.checked;
    },
    deleteSelectedTodos: (state) => {
      return state.filter((todo: TodoState) => !todo.checked);
    },
  },
});

export const {addTodo, checkTodo, deleteSelectedTodos} = todoSlice.actions;
export default todoSlice.reducer;
