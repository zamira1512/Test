import React from 'react';
import Todo from "../Todo";

const TodoList = ({ todos, setTodos, changedTodos, searchText}) => {
    return (
        <div className='todo-list'>
            {
                changedTodos.filter(el => el.text.toLowerCase().includes(searchText)).map((todo) =>(
                    <Todo key={todo.id}
                          setTodos={setTodos}
                          todos={todos}
                          todo={todo}
                          text={todo.text}
                          searchText={searchText}
                    />
                ))
            }

        </div>
    );
};

export default TodoList;