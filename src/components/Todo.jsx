import React from 'react'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'

function Todo() {

    
    return (
        <div style={{marginTop:"30px"}}>
            <h2>Todo List</h2>
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default Todo
