import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./features/todo/todoSlice.ts"

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch