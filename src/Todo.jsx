import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){

    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo] = useState("");
    

    let updateTodo = ()=>{
      setNewTodo(event.target.value);
    };

    let addNewTask = (event) => {
        setTodos([...todos, {task:newTodo , id:uuidv4(), isDone:false}]);
        setNewTodo("");
    }

    let deleteTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let updateAll = ()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((Todo)=>{
                return {
                    ...Todo,
                    task: Todo.task.toUpperCase()
                }
            })
        ));
    };

    let updateOne = (id) =>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        task:todo.task.toUpperCase()
                    }
                }
                else{
                    return todo;
                }
            })
        ))
    }

    let MarkAsDone = (id) =>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        isDone:true
                    }
                }
                else{
                    return todo;
                }
            })
        ))
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
                todos.map((todo) =><li key={todo.id}>
                    <span style={isDone ? {textDecoration:"line-through"} : {}}>{todo.task}</span>
                    &nbsp; &nbsp;
                    <button onClick={()=>{deleteTodo(todo.id)}}>delete</button>
                    &nbsp;&nbsp;
                    <button onClick={()=>{updateOne(todo.id)}}>Update</button>
                   
                    </li>)
            }
        </ul>
        <button onClick={updateAll}>Update All</button>
    </div>);
}