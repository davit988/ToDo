import { useEffect, useReducer } from "react";
import {
  addAC,
  changeTextAC,
  checkedAC,
  deleteAC,
  initialState,
  reducer,
} from "./Store/Store";
import { ToDo } from "./components/ToDo/ToDo";
import { AddToDo } from "./components/AddToDo/AddToDo";
import { API } from "./api/api";
import "./App.css";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  const toDoText = (e) => {
    dispatch(changeTextAC(e.target.value));
  };

  const add = () => {
    dispatch(addAC());
  };

  const deleteToDo = (id) => {
    dispatch(deleteAC(id));
  };

  const checked = (id) => {
    dispatch(checkedAC(id));
  };

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  return (
    <>
      <ToDo state={state} toDoText={toDoText} add={add} />
      <AddToDo deleteToDo={deleteToDo} toDo={state.todos} checked={checked} />
    </>
  );
}

export default App;
