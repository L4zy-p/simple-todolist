import React, { useState } from 'react'
import { useAppDispatch } from '../app/hook'
import { addTodo } from '../features/todos/todos-slice'
import { v4 as uuidv4 } from 'uuid'
import Button from './Button'

const FormTodo = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useAppDispatch()

  const createTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      text: todo,
      done: false
    }))
    setTodo('')
  }

  return (
    <div className='mb-4'>
      <h1 className='text-gray-900 text-2xl font-semibold'>Todo List</h1>
      <div className='flex mt-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900'
          name='todo' 
          value={todo} 
          onChange={(e) => setTodo(e?.target?.value)} />
        <Button 
        cls='p-2 '
        btnType='ADD'
        type='button' disabled={!todo} onClick={createTodo}>Add</Button>
      </div>
    </div>
  )
}

export default FormTodo