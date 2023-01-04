import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
// import API from "./api";
import UseEffect from "./useEffect";

const Todo = () => {
    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false,
        },
        {
            task: 'Learn React Hook',
            isCompleted: false,
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false,
        },
    ];

    const [todos, setTodos] = useState(initialState)
    return (
        <div>
        <h1>ToDo List</h1>
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        {/* <API/> */}
        <UseEffect/>
        </div>
    );
}

export default Todo;