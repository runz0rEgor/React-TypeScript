import React from 'react';
import {Todo} from '../todo/todo'
import {useContext} from 'react';
import { TodosContext } from '../../context/TodosProvider';



export function TodoList() {
  const context = useContext(TodosContext);
  return (
    <ul>
    {context.todos.map(todo => (<Todo todo={todo} key={todo.id}/>))}
    </ul>
  )
}
