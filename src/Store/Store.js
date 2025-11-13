export const initialState = {
  text: "",
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {

    default:
        case "changeText" : 
        return {
            ...state ,
            text : action.payload
        }
      return state;
  }
};
