import React from 'react'

import {CountContext} from '../ContextProvider.jsx'
import {incrementFn,decrementFn} from '../redux/action.js'

function Counter() {
    const [store] = React.useContext(CountContext)

    let data;
    store.subscribe(() => {

        data = store.getState()
        
        setState(data.count)
    })
    const [state,setState] = React.useState(0)
    
    function handleIncrement(){
        
        const actionOne = incrementFn(1)
        store.dispatch(actionOne)
    }
    function handleDecrement(){
        const actionTwo = decrementFn(1)
        store.dispatch(actionTwo)
    }

    return (
        <div>
            <p>count: {state}</p>
            <button onClick={handleIncrement}>Increase Count +1</button> 
            <button onClick={handleDecrement}>Decrease Count -1</button>
        </div>
    )
}

export default Counter
