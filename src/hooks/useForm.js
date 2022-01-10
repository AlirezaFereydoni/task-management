import { useReducer } from "react";

const Dispatcher = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const FormReducer = (state = {}, action) => {
  switch (action.type) {
    case "INITIAL":
      return action.initialData; // data should be pass by `initialData` key

    case "CHANGE":
      return Dispatcher(state, action); //  name of state should pass by `name` and it's value by `value` key

    default:
      return state;
  }
};

const useForm = initialState => {
  const [form, setForm] = useReducer(FormReducer, initialState);

  return [form, setForm];
};

export default useForm;
