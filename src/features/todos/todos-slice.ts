import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../types'

interface TodosState {
  data: Todo[]
}

const initialState: TodosState = {
  data: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.data.push(action.payload)
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.data = state.data.filter((data) => data.id !== action.payload)
    },
    editTodo(state, action: PayloadAction<Todo>) {
      const index = state.data.findIndex((data) => data.id === action.payload.id)
      let newVal = [...state.data]
      newVal[index] = { ...action.payload }
      state.data = newVal
    }
  }
})


export const { addTodo, deleteTodo, editTodo } = todosSlice.actions
export default todosSlice.reducer