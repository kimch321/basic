import React, {useState} from "react";
import styles from "./TodoList.module.css"

type todo = {
    id: string;
    text: string;
    status: string;
}
// addTodo: 1. 빈값 입력 불가. 2. 공백 제거 3. 플레이스 홀더: Add Todo

export default function TodoList() {
    const [todos, setTodos] = useState<todo[]>([
        {id: '123', text: '장보기', status: 'active'},
        {id: '124', text: '운동하기', status: 'active'},
    ]);
    const [inputTodo, setInputTodo] = useState("");

    function handleChange (e: any) {
        const { value } = e.target
        setInputTodo(value);
    }

    function handleClick () {

    }

    return (
        <section>
            <ul>
                {
                    todos.map((todo, index) => <li key={todo.id}>
                        <input type="checkbox"
                               id={todo.id}/>
                        <label htmlFor={todo.id}> {todo.text}</label>
                    </li>)
                }
            </ul>
            <input type="text" placeholder=" Add Todo" onChange={handleChange} value={inputTodo} className={styles.addTodoInput} id="addTodoInput"/>
            <button type="button" className={styles.addBtn} onClick={handleClick}>Add</button>
        </section>
    )
}