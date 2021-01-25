import { createContext } from "react";
import {ITodoContext} from '../types'


export const TodosContext = createContext<ITodoContext>({todos: []});
