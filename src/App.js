import './App.css';
import Home from './components/Home';
import Header from './components/Header';

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
        {/* put footer here */}
      </Router>
    </div>
  );
}

export default App;
