import React from "react";
import { useSelector } from "react-redux";
import { Trash2 } from "react-feather";
import { removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";



//to get all todos we will be reading the data. What we have to do
// is using the useSelector because it has the access to state and takes a callback
const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
 

  return (
    <>
      <div><h3>Tasks To Do</h3></div>
     
      <ul>
        {todos.map(todo => {
          return (
            <>
              <div className="flex p-4 justify-evenly ">
                <h3>{todo.text}</h3>
                <Trash2 size={20} className="cursor-pointer" onClick={()=>dispatch(removeTodo(todo.id))} />
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
};


export default Todos;
