import React from 'react'
import {store,todoStore} from './redux/store.js'

export const CountContext = React.createContext()

function ContextProvider({children}) {

    var value = [store,todoStore]

    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    )
}

export default ContextProvider
