import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

type todo = {
    id: string;
    text: string;
    status: string;
}

export default function TodoList() {
    const [todos, setTodos] = useState<todo[]>([
        {id: '123', text: '장보기', status: 'active'},
        {id: '124', text: '운동하기', status: 'active'},
    ]);

    function onAdd(text: string) {
        setTodos((prev) => [...prev,
            {id: String(Number(todos[todos.length - 1].id) + 1),
                text: text.trim(), status: "active"}
        ])
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
            <AddTodo onAdd = {onAdd} />
        </section>
    )
}