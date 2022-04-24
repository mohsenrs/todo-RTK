import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { getTodosAsync } from './../redux/todoSlice'
import { useDispatch } from 'react-redux'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(getTodosAsync())
  }, [dispatch])

  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}

export default TodoList
