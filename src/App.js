import React from "react";
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import Project from '../src/pages/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Project />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
