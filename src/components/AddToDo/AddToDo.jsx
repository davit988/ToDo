import "./AddToDo.css";

export const AddToDo = ({ toDo, deleteToDo, checked }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="addToDo">
            {toDo.map((elm) => {
              return (
                <div className={elm.isDone ? "tod" :"to"}>
                  <input
                    type="checkbox"
                    checked={elm.isDone}
                    onChange={() => checked(elm.id)}
                  />
                  <li className={elm.isDone ? "textIsDone" : ""} key={elm.id}>
                    {elm.title}
                  </li>
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
