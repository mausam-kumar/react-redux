import React from 'react'
import {addTodo} from '../redux/action.js'
import {v4 as uuid } from 'uuid'
import {useDispatch} from 'react-redux'

function TodoInput() {

    const [state,setState] = React.useState("");

    const dispatch = useDispatch()

    function handleAdd(){
        var payload = {
            title: state,
            id:uuid(),
        }
        dispatch(addTodo(payload))
    }

    function handleChange(e){
        setState(e.target.value)
    }
    return (
        <div>
            <input value={state} onChange={(e) => handleChange(e)} type="text" name="" id="" placeholder="Enter Something"/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default TodoInput
