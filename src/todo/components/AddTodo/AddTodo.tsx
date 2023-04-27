import React, { useState } from 'react';
import styles from "./AddTodo.module.css"


type Props = {
    onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: Props) {
    const [text, setText] = useState("");

    function handleChange (e: any) {
        const { value } = e.target
        setText(value);
    }
    function handleSubmit () {
        if(text.trim().length === 0) return;
        onAdd(text);
        setText("");
    }

  return (
    <>
        <input type="text" placeholder=" Add Todo" onChange={handleChange} value={text} className={styles.addTodoInput}/>
        <button type="button" className={styles.addBtn} onClick={handleSubmit}>Add</button>
    </>
  );
}