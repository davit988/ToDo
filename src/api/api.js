import axios from "axios";
import { asyncToDosAC } from "../Store/Store";


export const API = {
  getTodos(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => dispatch(asyncToDosAC(res.data)));
  },
};
