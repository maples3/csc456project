import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import CardList from './components/CardList';
import Login from './components/Login';
import { store } from './store/store';
import './App.scss';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
    <Provider store={store}>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/list' component={CardList} />
        </div>
      </Provider>
    </HashRouter>
    );

}

export default App;
