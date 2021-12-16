import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from './ContextProvider.jsx'
import {Provider} from 'react-redux'
import {todoStore} from './redux/store.js'

ReactDOM.render(
  <React.StrictMode>
   <Provider store={todoStore}>
      <ContextProvider>
        <App /> 
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

