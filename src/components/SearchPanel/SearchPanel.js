import React from 'react';
import StatusBar from "../StatusBar";


const SearchPanel = ({setStatus, setSearchText}) => {
   const searchFilter = (e) => {
       // console.log(e.target.value.toLowerCase().split(''))
       setSearchText(e.target.value)


    };
    return (
        <div>
            <input type="search" onChange={searchFilter} className={'search'} placeholder={'Поиск задачи'}/>
            <StatusBar setStatus={setStatus}/>
        </div>
    );
};

export default SearchPanel;