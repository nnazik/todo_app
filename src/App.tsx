import React from 'react';
import 'antd/dist/antd.css';
import './App.scss'
import { TodoInterface } from './utils/todoInterfaces'
import TodoForm from './components/form/Form'
import TodoList from './components/list/list'
import { Row } from 'antd';

function App() {
  const [items, setItems] = React.useState<TodoInterface[]>([])

  const handleTodoAdd = (todo: TodoInterface) => {
    const todosState: TodoInterface[] = [...items]
    todosState.push(todo)
    setItems(todosState)
  }

  const handleTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newTodosState: TodoInterface[] = [...items]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
    setItems(newTodosState)
  }

  const handleTodoRemove = (id: string) => {
    const newTodosState: TodoInterface[] = items.filter((todo: TodoInterface) => todo.id !== id)
    setItems(newTodosState)
  }

  const handleTodoDone = (id: string) => {
    const newTodosState: TodoInterface[] = [...items]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isDone = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isDone
    setItems(newTodosState)
  }

  return (
    <div className="App-body">
      <Row>
        <h2>My Todo App</h2>
      </Row>
      <Row>
        <TodoForm handleAdd={handleTodoAdd} todos={items} />
      </Row>
      <Row>
        <TodoList
          listItems={items}
          handleUpdate={handleTodoUpdate}
          handleRemove={handleTodoRemove}
          handleDone={handleTodoDone}
        />
      </Row>
    </div>
  );
}

export default App;
