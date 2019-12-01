import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Login from './components/Login';
import { store } from './store/store';
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/list' component={CardList} />
        </div>
      </Provider>
    </BrowserRouter>
    );

}

export default App;
