import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incrementCount,decrementCount,multiply,divide} from '../redux/action.js'


function ManualCounter() {
    const [state,setState] = React.useState("")

    const value = useSelector((state) => state.defaultCount)

    const dispatch = useDispatch()

    function handleChange(e){
        setState(e.target.value)
    }

    function handleAdd(){
        const payload = Number(state)
        
        dispatch(incrementCount(payload))

    }

    function handleSub(){
        const payload = Number(state)
        
        dispatch(decrementCount(payload))
    }
    function handleMul(){
        const payload = Number(state)
        
        dispatch(multiply(payload))
    }
    function handleDiv(){
        const payload = Number(state)
        
        dispatch(divide(payload))
    }


    return (
        <div style={{marginTop:"30px"}}>
            <span>Enter value of X</span>
            <input value={state} onChange={(e) => handleChange(e)} type="number" name="" id="" />
            <br />
            <p>Value : {value}</p>
            <button onClick={handleAdd}>ADD X</button>
            <button onClick={handleSub}>SUB X</button>
            <button onClick={handleMul}>MUL X</button>
            <button onClick={handleDiv}>DIVIDE X</button>
        </div>
    )
}

export default ManualCounter
