import React from 'react';

const Todo = ({text, todos, setTodos, todo}) => {
    const setDelete = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };
    const setComplete = () => {
        setTodos(todos.map((el) => {
            if (todo.id === el.id) {
                return {...el, completed: !el.completed}
            }
            return el
        }));
    };
    const setImportant = () => {
        setTodos(todos.map((el) => {
            if (todo.id === el.id) {
                return {...el, important: !el.important}
            }
            return el
        }));
    };
    return (
        <div>
            <div className={`Todo ${todo.completed ? "completed" : ''} ${todo.important ? "important" : ''}`}> {text} </div>
            <button className={'btn btn-success'} type='button' onClick={setComplete}> Выполнено</button>
            <button className={'btn btn-danger'} type='button' onClick={setDelete}> Удалить</button>
            <button className={'btn btn-info'} type='button' onClick={setImportant}> Отметить важным</button>
        </div>
    );
};

export default Todo;