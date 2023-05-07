import React, {useState} from "react";
import './App.css';
import TodoList from "./todo/components/TodoList/TodoList";
import Header from "./todo/components/Header/Header";
import {DarkModeProvider} from "./todo/context/DarkModeContext";

const filters = ['all', 'active', 'completed']
export default function App() {
    const [filter, setFilter] = useState(filters[0]);
    return(
        <DarkModeProvider>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={setFilter}
            />
            <TodoList filter={filter}/>
        </DarkModeProvider>
    )
}