import React from 'react'
import {useSelector} from 'react-redux'

function TodoList() {

    const todo = useSelector((state) => state.todos)
    return (
        <div>
            {
                todo.map((ele) => {
                    return(
                        <p key={ele.id}>{ele.title}</p>
                    )
                })
            }
        </div>
    )
}

export default TodoList
