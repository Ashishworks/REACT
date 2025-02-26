import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function ToDoList() {
    let [arrItem, setdoitem] = useState([{ task: "sample text", id: uuidv4() }])
    let [newToDo, setnewToDo] = useState("")
    let add = () => {
        setdoitem([...arrItem, { task: newToDo, id: uuidv4() }])
        setnewToDo("")
    }
    let updateToDo = (event) => {
        setnewToDo(event.target.value)
    }
    let deleteit = (id) => {
        setdoitem((prevTask) => arrItem.filter((prevTask) =>
            prevTask.id != id
        ))
    }
    let upperCase = () => {
        setdoitem((previtems) => (
            previtems.map((previtem) => {
                return {
                    ...previtem, task: previtem.task.toUpperCase()
                };
            })
        ))
        
    }
    let upperCaseOne = (id) => {
        setdoitem((previtems) => 
            previtems.map((previtem) => {
                if (previtem.id == id) {
                    return {
                        ...previtem, task: previtem.task.toUpperCase()
                    };
                }
                else{
                    return previtem;
            }})
        
    )}
    return (
        <div>
            <h3>TO DO LIST</h3>
            <input value={newToDo} onChange={updateToDo}></input>
            <br></br>
            <br></br>
            <button onClick={add}>ADD TASK</button>
            <ul>
                {
                    arrItem.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span> &nbsp;&nbsp;
                            <span><button onClick={() => deleteit(todo.id)}>DELETE</button></span> {/* We haven't directly use deleteit() cuz it will execute the function but we also have to pass argument so we ()=> that helps use to write deleteit(todo) without its immediate*/}
                            <span><button onClick={()=> upperCaseOne(todo.id)}>UPPERCASE ONE</button></span>
                            <span><br></br></span>
                            <span><br></br></span>
                        </li>
                    )
                    )
                }
            </ul>
            <button onClick={() => upperCase()}>UPPERCASE ALL</button>
        </div>
    )
}

