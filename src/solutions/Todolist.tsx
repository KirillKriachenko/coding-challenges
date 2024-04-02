import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import TodoListComponent from "../components/TodoListComponent";

export type TodoListType = {
    description:string;
    completed: boolean;
}


function Todolist(){

    const [task, setTaks] = useState('');
    const [selectedTask, setSelectedTask] = useState<TodoListType | undefined>();

    const [showModal, setShowModal] = useState(false);

    const [todoList, setTodoList] = useState<Array<TodoListType>>([]);

    const addTaskHandler = () => {

        setTodoList([...todoList,{description:task,completed:false}]);
    }

    const deleteTaskHandler = (item: TodoListType) => {
        const newList = todoList.filter((task) => task != item);
        setTodoList(newList)
    }

    const edittaskHandler = (item:TodoListType) => {
        setSelectedTask(item);
        setShowModal(true);

        console.log(showModal);
    }

    const displayList = () => {
        return  <ul>
           { todoList.map((item,key) => <li key={key}> <TodoListComponent editAction={(item:TodoListType) => edittaskHandler(item)} deleteAction={(item:TodoListType) => deleteTaskHandler(item) } item={item} key={key} /> </li>)}
        </ul>
    }

     const updateTask = () => {

        const newList = todoList.map((task) => {
            if (task == selectedTask){
                // task.description = editTask;
            }
            else {
                return task;
            }
        })

        // setTodoList(newList)

        // setTodoList(newList);
     }

     const updateTaskDescription = (text:string) => {
        let newTask: TodoListType = {description:text, completed: selectedTask!.completed}
        setSelectedTask(newTask);
     }

    return (
        <>
            Todo List

            <div>
                <input name="task" onChange={(e) => setTaks(e.target.value)} />
                <button onClick={addTaskHandler}>Add</button>
            </div>
            <div>
                {
                    displayList()
                }
            </div>
            <div style={{display: showModal == true ? 'inline': 'none', width:'100%', height:'100vh', justifyContent:'center'}}>
                <input value={selectedTask?.description} onChange={(e) => updateTaskDescription(e.target.value)} />
                <button onClick={() => updateTask()}>Save</button>
            </div>
        
        </>
    ) 
}

export default Todolist;