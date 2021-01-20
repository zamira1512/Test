import React from 'react';

const StatusBar = ({setStatus}) => {
    const statusHandler = (e) =>{
       setStatus(e.target.value);
    };
    return (
        <div className={"statusList"}>
            <button type='button' onClick={statusHandler} className={'status btn'} value='all'>Все задачи</button>
            <button type='button' onClick={statusHandler} className={'status btn'} value='completed'>Выполненные</button>
            <button type='button' onClick={statusHandler} className={'status btn'} value='important'>Важные</button>
            <button type='button' onClick={statusHandler} className={'status btn'} value='uncompleted'>Не выполненные</button>
        </div>
    );
};

export default StatusBar;