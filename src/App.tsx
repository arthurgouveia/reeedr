import * as React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './helpers/Routes';
import Header from './modules/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
