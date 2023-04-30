import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

type todo = {
    id: string;
    text: string;
    status: string;
}
type TodoProps = {
    todo: todo;
    onUpdate: (updated: todo) => void;
    onDelete: (deleted: todo) => void;
}

export default function Todo({todo, onUpdate, onDelete} : TodoProps) {
    const {text,status} = todo;
    const handleChange = (e: any) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status})
    };
    const handleDelete = () => onDelete(todo);

    return (
    <li>
       <input
           type="checkbox"
           checked={status === 'completed'}
           onChange={handleChange}
       />
        <label>{text}</label>
        <button
            onClick={handleDelete}>
            <FaTrashAlt />
        </button>
        ))
    </li>
  );
}