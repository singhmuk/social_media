import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

import Contact from './components/contact';
import ElementMatch from './components/elementMatch';


const App = () => {

  return (
    <Provider store={store} >
      <Router>
        <Route exact path='/' component={Contact} />
        <Route path='/elementMatch' component={ElementMatch} />
      </Router>
    </Provider>
  );
}

export default App;
