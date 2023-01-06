import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) =>
      setMonster(response)
    )
  },[])
  useEffect(()=>{
    const newFilteredMonsters = monster.filter((monster)=>{  
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monster, searchField ])
  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onSearchChangeHandler={onSearchChange} placeholder='Search Monsters' className='monster-search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
  )
}

export default App;
