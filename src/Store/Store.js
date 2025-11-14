export const initialState = {
  text: "",
  todos: [],
};

export const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    default:
    case "changeText":
      return {
        ...state,
        text: action.payload,
      };
    case "add":
      return {
        text: "",
        todos: [
          ...state.todos,
          { id: Date.now(), title: state.text, isDone: false },
        ],
      };
    case "delete":
      return {
        ...state,
        todos: [...state.todos.filter((elm) => elm.id !== action.id)],
      };
    case "checked":
      return {
        ...state,
        todos: [
          ...state.todos.map((elm) => {
            if (elm.id === action.id) {
              return {
                ...elm,
                isDone: !elm.isDone,
              }
            }else{
              return{
                ...elm
              }
            }
          }),
        ],
      };

      return state;
  }
};
