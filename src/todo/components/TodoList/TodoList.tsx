import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

type TodoListProps = {
    filter: string;
}
type todo = {
    id: string;
    text: string;
    status: string;
}
export default function TodoList({filter}: TodoListProps) {
    const [todos, setTodos] = useState<todo[]>([
        {id: '123', text: '장보기', status: 'active'},
        {id: '124', text: '운동하기', status: 'active'},
    ]);

    const handleAdd = (todo: todo) => setTodos([...todos, todo]);
    const handleUpdate = (updated: todo) =>
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    const handleDelete = (deleted: todo) =>
        setTodos(todos.filter((t) => t.id !== deleted.id));

    const filtered = getFilteredItems(todos, filter);

    return (
        <section>

            <ul>
                {
                    filtered.map((item) => (
                        <Todo
                            key={item.id}
                            todo={item}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </ul>
            <AddTodo
                onAdd = {handleAdd}
                nextId = {String(Number(todos[todos.length-1].id) + 1)}
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