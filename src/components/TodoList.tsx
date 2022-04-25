import React from 'react'
import { useAppSelector } from '../app/hook'
import Todo from './Todo'

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.data)

  return (
    <div>
      {todos?.map((todo) => (
        <Todo key={todo.id} data={todo}/>
      ))}
    </div>
  )
}

export default TodoList