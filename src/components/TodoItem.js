import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodoAsync } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    )
  }

  const deleteHandler = () => {
    dispatch(deleteTodoAsync({ id: id }))
  }

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input
            type='checkbox'
            className='mr-3'
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          {title}
        </span>
        <button className='btn btn-danger' onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
