import React, {useEffect, useState} from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

type TodoListProps = {
    filter: string;
}
type todo = {
    id: string;
    text: string;
    status: string;
}

export default function TodoList({filter}: TodoListProps) {
    const [todos, setTodos] = useState<todo[]>(readTodosFromLocalStorage);
    // useState는 상태를 저장하고 있습니다.
    // useState에 함수를 전달하면.
    // 초기값이 필요한 경우: 함수를 실행하여 초기값을 정합니다.
    // 초기값이 필요하지 않은 경우: 기존에 저장된 초기값을 사용합니다.

    const handleAdd = (todo: todo) => setTodos([...todos, todo]);
    const handleUpdate = (updated: todo) =>
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    const handleDelete = (deleted: todo) =>
        setTodos(todos.filter((t) => t.id !== deleted.id));

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const filtered = getFilteredItems(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo
                onAdd = {handleAdd}
                nextId = {String(new Date().getMilliseconds())}
            />
        </section>
    )
}

function getFilteredItems(todos: todo[], filter: string): todo[] {
    if(filter === 'all') {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage(): [] {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}