
import React from 'react'

const AddTask = () => {
  return (
    <div>
      <form className="form">
          <input
          type="text"
          name="todo"
          value=""
          placeholder="Add a Task.."
          className="bg-dark todo_input"

          />
      </form>
    </div>
  )
}


export default AddTask
