import React from 'react';
import {ITodo} from '../../types'

interface TodoProps {
  todo: ITodo
}

export function Todo({todo}: TodoProps) {
  return (
    <li>{todo.description}</li>
  )
}
