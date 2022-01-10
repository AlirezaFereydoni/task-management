import { createContext, useReducer } from "react";

const initialStore = [];

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTask];
    case "EDIT":
      return [...state.map(item => (item.id === action.task.id ? { ...action.task } : item))];
    case "DELETE":
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  }
};

const Context = createContext({ tasks: [], setTask: () => {} });

const TaskController = ({ children }) => {
  const [tasks, setTask] = useReducer(TaskReducer, initialStore);

  return <Context.Provider value={{ tasks, setTask }}>{children}</Context.Provider>;
};

export { Context, TaskController };
