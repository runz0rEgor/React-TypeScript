import React, {useState} from 'react';
import {Form} from './components/form/form';
import {TodoList} from './components/todoList/todoList';
import {Footer} from './components/footer/footer';
import {TodosContext} from './context/TodosProvider';
import {ITodo} from './types'

function App() {
  
  const [todos, setTodos] = useState<Array<ITodo>>([])

  function todoHandler(description: string) {
    setTodos([...todos, {description, id: Date.now(), completed: false}])
  }
  console.log(todos);
  
  return (
    <TodosContext.Provider value={{todos}}>
      <div className="App">
        <h1>todos</h1>
        <Form todoHandler={todoHandler}/>
        <TodoList/>
        <Footer/>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
