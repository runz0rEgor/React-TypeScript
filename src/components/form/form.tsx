import React, {useState} from 'react';

interface FormProps {
  todoHandler: (description: string) => void;
}

export function Form({todoHandler}: FormProps) {
  const [description, setDescription] = useState<string>('')
  function addTodoHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if(event.key === 'Enter') {
      todoHandler(description)
      setDescription('')
    }
  }

  function descriptionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }
  
  return (
    <input  
    type="text"
    onKeyPress={addTodoHandler}
    onChange={descriptionHandler}
    value={description}
    />
  )
}
