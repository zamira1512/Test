import React, {useEffect, useState} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList/TodoList";
import SearchPanel from "./components/SearchPanel";


function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [changedTodos, setChangedTodos] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
     getTodos()
    }, []);
    useEffect(() => {
        saveTodos();
        filterTodos();
    }, [status, todos ]);
    const saveTodos = () => {
        localStorage.setItem('todo', JSON.stringify(todos))
    };
    const getTodos = () => {
        if (localStorage.getItem('todo') === null) {
            localStorage.setItem('todo', JSON.stringify([]))
        } else {
            setTodos(JSON.parse(localStorage.getItem('todo')))
        }
    };
    const filterTodos = () => {
        switch (status) {
            case 'completed':
                setChangedTodos(todos.filter(item => item.completed));
                break;
            case 'important':
                setChangedTodos(todos.filter(item => item.important));
                break;
            case 'uncompleted':
                setChangedTodos(todos.filter(item => !item.completed));
                break;
            default:
                setChangedTodos(todos);
                break;
        }
    };
    return (
        <div className="App">
            <h1 className='title'>Список моих задач</h1>
            <SearchPanel setSearchText={setSearchText} setStatus={setStatus}/>
            <TodoList searchText={searchText} changedTodos={changedTodos} todos={todos} setTodos={setTodos}/>
            <Form setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
        </div>
    );
}

export default App;
