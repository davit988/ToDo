import React, { useState } from "react";
import "./AddToDo.css";

export const AddToDo = ({ toDo,deleteToDo ,checked}) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="addToDo">
            {toDo.map((elm) => {
              console.log(elm);
              
              return (
                <div className="to">
                  <input type="checkbox"  checked={elm.isDone}  onChange={() => checked(elm.id)}/>
                  <li className={elm.isDone ? 'textIsDone' : ""} key={elm.id}>{elm.title}</li>
                  <button onClick={() => deleteToDo(elm.id)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
