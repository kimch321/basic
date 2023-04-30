import React, { useState } from 'react';
import styles from "./AddTodo.module.css"

type todo = {
    id: string;
    text: string;
    status: string;
}
type Props = {
    onAdd: (todo: todo) => void;
    nextId: string
}

export default function AddTodo({ onAdd, nextId }: Props) {
    const [text, setText] = useState("");

    function handleChange (e: any) {
        const { value } = e.target
        setText(value);
    }
    function handleSubmit () {
        if(text.trim().length === 0) return;
        onAdd({id: nextId, text, status: 'active'});
        setText("");
    }

  return (
    <>
        <input type="text" placeholder=" Add Todo" onChange={handleChange} value={text} className={styles.addTodoInput}/>
        <button type="button" className={styles.addBtn} onClick={handleSubmit}>Add</button>
    </>
  );
}