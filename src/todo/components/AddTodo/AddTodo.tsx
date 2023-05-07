import React, {useContext, useState} from 'react';
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
    function handleSubmit (e:any) {
        if(text.trim().length === 0) return;
        onAdd({id: nextId, text, status: 'active'});
        setText("");
    }

  return (
    <form className={styles.form} >
        <input
            type="text"
            className={styles.input}
            placeholder="Add Todo"
            onChange={handleChange} value={text} />
        <button type="button" className={styles.button} onClick={handleSubmit}>Add</button>
    </form>
  );
}