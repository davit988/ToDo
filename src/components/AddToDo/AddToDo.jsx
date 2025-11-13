import React, { useState } from "react";
import "./AddToDo.css";

export const AddToDo = ({ toDo,deleteToDo }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="addToDo">
            {toDo.map((elm) => {
              return (
                <div className="to">
                  <li key={elm.id}>{elm.title}</li>
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
