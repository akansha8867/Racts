import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Aboutus from './component/Aboutus/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/Header' component={Header} />
          <Route exact path='/' component={Aboutus} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
