import { useState } from 'react';

const TodoList = () => {

    const initialState = [ // 配列
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },     
    ]

    const [todos, setTodos] = useState(initialState)
    const [task, setTask] = useState('')
    const handleNewTask = (event) => {
        // console.log(event.target.value)
        // console.logでデータを確認しsetTask変更
        setTask(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault() // submitによるページリロードを停止させている
        if(task==='') return

        // debug
        // console.log({task, isCompleted:true});
        // console.log(...todos);

        // 既存のTodoリストに入力欄で追加した値を追加している処理
        setTodos(todos=>[...todos,{task, isCompleted: false}])
        setTask('')
    }
    const handleUpdateTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            {/* inputタグに入力した値を取得するためにonChangeイベントを設定 */}
            {/* onChangeイベントで実行する関数名は関数名は「handleNewTask」とします */}
            <form onSubmit={handleSubmit}>
            Add Task :
            <input 
                value={ task } 
                placeholder='Add New Task' 
                onChange={handleNewTask}
            />
            <button type="submit">Add</button>
            </form>
            <ul>
                {
                todos.map(
                    (todo, index) => (
                        <li 
                            key={index}
                            style={
                                todo.isCompleted===true ? {textDecorationLine: 'line-througn'
                            }:{}}
                        >
                            {todo.task} 
                            <span onClick={ () => handleUpdateTask(index) }> 
                                X 
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
  );
}

export default TodoList;
