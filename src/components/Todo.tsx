import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../app/hook'
import { deleteTodo, editTodo } from '../features/todos/todos-slice'
import { Todo as TodoType } from '../types'
import Button from './Button'

type Props = {
  data: TodoType
}

const Todo: React.FC<Props> = ({ data }: Props) => {
  const dispatch = useAppDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [todo, setTodo] = useState<TodoType>({
    id: '',
    text: '',
    done: false
  })

  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const editTodoData = (data: TodoType) => {
    dispatch(editTodo(data))
  }

  useEffect(() => {
    if (data) {
      setTodo(data)
    }
  }, [data])

  return (
    <div className='flex mb-4 items-center'>
      {
        !data.done && <>
          {
            isEdit && <div className='flex flex-1'>
              <input
                className='border-none appearance-none rounded w-full py-2 px-3 mr-4 text-gray-900'
                name='todo'
                value={todo?.text}
                onChange={(e) => setTodo({ ...todo, text: e?.target?.value })} />
              <Button
                cls='p-2 '
                btnType='ADD'
                type='button' disabled={!todo} onClick={() => {
                  editTodoData({ ...todo })
                  setIsEdit(false)
                }}>Edit</Button>
              <Button
                cls='ml-2'
                btnType='REMOVE'
                type='button'
                onClick={() => {
                  setTodo(data)
                  setIsEdit(false)
                }}
              >Cancel</Button>
            </div>
          }
          {
            !isEdit && <>
              <p 
              title={`click to edit this todo`}
              className='w-full text-gray-900 cursor-pointer' 
              onClick={() => setIsEdit(true)}>{data.text}</p>
              <Button
                cls='ml-4 mr-2'
                btnType='DONE'
                type='button'
                onClick={() => editTodoData({ ...data, done: true })}
              >Done</Button>
            </>
          }
        </>
      }
      {
        data.done && <>
          <p className='w-full line-through text-green-500'>{data.text}</p>
          <Button
            cls='ml-4 mr-2'
            type='button'
            onClick={() => editTodoData({ ...data, done: false })}
          >Not Done</Button>
        </>
      }
      {
        !isEdit && <Button
          cls='ml-2'
          btnType='REMOVE'
          type='button'
          onClick={() => removeTodo(data.id)}
        >Remove</Button>
      }
    </div>
  )
}

export default Todo