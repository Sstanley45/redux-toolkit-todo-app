import { createSlice, nanoid } from "@reduxjs/toolkit";

//create an initial state.
//for the todo it will be an empty array

const initialState = {
  todos: [],
};

//create the slice.. the slice is an object consisting of a name, initialState and reducers.
//the reducers are responsible for updating the store

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});


//export each method in the reducers as actions
export const {addTodo, removeTodo} = todoSlice.actions

//export the entire reducer because the reducer has to be wired up withe the store.
export default todoSlice.reducer;
