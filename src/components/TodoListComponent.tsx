import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import './Navbar.css'
import { TodoListType } from '../solutions/Todolist'

type Props = {
    item: TodoListType
    deleteAction: (item:TodoListType) => void;
    editAction: (item:TodoListType) => void;
}

function TodoListComponent(props: Props) {
    const [complete, setComplete] = useState(props.item.completed);

    return (

        <><input type='checkbox' checked={complete} onChange={() => setComplete(!complete)} /> <span style={{textDecoration: complete ? 'line-through': 'none'}}>{props.item.description}</span> <button onClick={() => props.editAction(props.item)}>edit</button><button onClick={() => props.deleteAction(props.item)}>delete</button></>
    )
}

export default TodoListComponent