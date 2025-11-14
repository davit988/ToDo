import { useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./Store/Store";
import { ToDo } from "./components/ToDo/ToDo";
import { AddToDo } from "./components/AddToDo/AddToDo";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  const toDoText = (e) => {
    dispatch({ type: "changeText", payload: e.target.value });
  };

  const add = () => {
    dispatch({ type: "add" });
  };

  const deleteToDo = (id) => {
    dispatch({ type: "delete", id: id });
  };

  const checked = (id) => {
    dispatch({ type: "checked", id:id});
  };

  return (
    <>
      <ToDo state={state} toDoText={toDoText} add={add} />
      <AddToDo deleteToDo={deleteToDo} toDo={state.todos} checked={checked} />
    </>
  );
}

export default App;
