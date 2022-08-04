import React from 'react';
import './App.css';
import { Dropdown } from './components/Dropdown';
import { data } from './data/data';

function App() {
    return (
        <div className="App">
            <Dropdown isShowLang isSearch isMulty data={data} />
        </div>
    );
}

export default App;
