import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
// import API from "./api";
import UseEffect from "./useEffect";
import Counter from "./useReducer/counter"
import Counter2 from "./useReducer/counter2"

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
        <Counter/>
        <Counter2/>
        </div>
    );
}

export default Todo;