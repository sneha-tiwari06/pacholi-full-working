
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainFile from './components/main';


function App() {
    return (
      <Router>
            <Routes>
            {/* <Route path="/" element={<Main />} />
             */}
             <Route path='/' element={<MainFile />} />
            </Routes>
            </Router>
    );
}

export default App;
