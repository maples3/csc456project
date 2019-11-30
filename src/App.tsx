import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CardList from './components/CardList/CardList';
import './App.css';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route exact path='/list' component={CardList} />
      </div>
    </BrowserRouter>
    );

}

export default App;
