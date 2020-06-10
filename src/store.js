import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const InitialState = { todos: [] };

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            todo: action.payload.todo,
          },
        ],
      };
    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};

export const addToDo = (todo, id) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: { todo, id },
  });
};

export const removeToDo = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TODO",
    payload: { id },
  });
};

export function initializeStore() {
  return createStore(
    reducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
  );
}
