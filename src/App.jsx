import { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./Store/Store";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);
console.log(state)
  return (
    <>
      <input
        value={state.text}
        onChange={(e) => dispatch({ type: "changeText", payload: e.target.value })
        }
      />
      <button>+</button>
    </>
  );
} 

export default App;
