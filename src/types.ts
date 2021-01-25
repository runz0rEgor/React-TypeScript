export interface ITodo {
  description?: string;
  id?: number;
  completed?: boolean;
}

export interface ITodoContext {
  todos: Array<ITodo>
}
