import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { iTask } from "../types/interfaces";

type ActionType =
  | { type: "ADD"; newTask: iTask }
  | { type: "EDIT"; task: iTask }
  | { type: "DELETE"; id: number };

interface ContextType {
  tasks: iTask[];
  setTask: Dispatch<ActionType>;
}

type TaskControllerProps = { children: ReactNode };

const initialStore: iTask[] = [];

const TaskReducer = (state: iTask[], action: ActionType) => {
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

const Context = createContext<ContextType>({ tasks: initialStore, setTask: () => {} });

const TaskController = ({ children }: TaskControllerProps) => {
  const [tasks, setTask] = useReducer(TaskReducer, initialStore);

  return <Context.Provider value={{ tasks, setTask }}>{children}</Context.Provider>;
};

export { Context, TaskController };
