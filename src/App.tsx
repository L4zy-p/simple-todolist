import { FormTodo, TodoList, Card } from './components'

function App() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-teal-100'>
      <Card>
        <FormTodo />
        <TodoList />
      </Card>
    </div>
  )
}

export default App
