import React, {useState} from "react";
import './App.css';
import TodoList from "./todo/components/TodoList/TodoList";
import Header from "./todo/components/Header/Header";

const filters = ['all', 'active', 'completed']
export default function App() {
    const [filter, setFilter] = useState(filters[0]);
    return(
        <div>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={setFilter}
            />
            <TodoList filter={filter}/>
        </div>
    )
}