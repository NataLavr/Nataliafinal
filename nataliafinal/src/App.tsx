import { useState } from 'react'
import './App.css'
import SearchField from './components/SearchField'
import Menu from './components/Menu';

function App() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <div className="main-wrapper">
      <div className="title">
        <h1>COMP 3013 - Final - Natalia Lavrenova</h1>
      </div>
      <div className="wrapper">
        <div className="vertical">
        <h3 className="search-title">Please search the menu:</h3>
        <div className="search-area">
          <SearchField searchItem={searchItem} setSearchItem={setSearchItem}/>
        </div>
        </div>
        <div className="menu-items">
          <Menu searchItem={searchItem}/>
        </div>
      </div>
    </div>
  )
}

export default App
