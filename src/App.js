import React from 'react'
import Counter from './components/Counter.jsx'
import Todo from './components/Todo.jsx'
import ManualCounter from './components/ManualCounter.jsx';

function App() {
  
  return (
    <div className="App">
     <Counter />
     <Todo />
     <ManualCounter />
    </div>
  );
}

export default App;
