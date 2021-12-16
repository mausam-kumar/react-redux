import React from 'react'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'

import {CountContext} from '../ContextProvider.jsx'

function Todo() {

    const [store,todoStore] = React.useContext(CountContext)
    todoStore.subscribe(() => {
        console.log(todoStore.getState());
    })
    return (
        <div style={{marginTop:"30px"}}>
            <h2>Todo List</h2>
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default Todo
