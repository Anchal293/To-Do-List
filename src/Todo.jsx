import { useState } from "react";

export default function Todo(){

    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodo = ()=>{
      setNewTodo(event.target.value);
    };

    let addNewTask = (event) => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    return (<div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodo}></input>
        <br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br></br> <br></br>
        <br></br>
        <hr></hr>
        <h4>Task To</h4>
        <ul>
            {
                todos.map((task) =><li>{task}</li>)
            }
        </ul>
    </div>);
}