import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {  
    super();

    this.state = {
      monster:[],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) =>
      this.setState(
        ()=>{return {monster: response}},
        ()=>{console.log(this.state)}
      )
    )
  }
  onSearchChange = (event)=>{
    let searchField = event.target.value.toLowerCase();
      this.setState(()=>{
        return {searchField};
      })
    }
  render () {
    console.log('render');
    const { searchField, monster } = this.state;
    const { onSearchChange } = this;
    const filteredValue = monster.filter((monster)=>{  
      return monster.name.toLowerCase().includes(searchField)
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onSearchChangeHandler={onSearchChange} placeholder='Search Monsters' className='monster-search-box'/>
        <CardList monsters={filteredValue}/>
      </div>
    );
  }
}

export default App;
