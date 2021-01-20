import React from 'react'

const Form = ({setInputText, inputText, setTodos, todos}) => {
    const userList = (event) => {
        setInputText(event.target.value)
    };
    const textSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            text: inputText,
            important: false,
            completed: false,
            id: Math.floor(Math.random() * 1000)
        }]);
        setInputText('')
    };


    return (
        <form className={'taskForm'} onSubmit={textSubmit}>
            <input className={'taskName'} onChange={userList} value={inputText} required type="text" placeholder='Запишите свою задачу'/>
            <button className={'taskAdd'} type='submit' >Add</button>
        </form>
    )
};

export default Form;