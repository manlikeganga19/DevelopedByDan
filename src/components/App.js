import React from "react";
import Header from './Header';
import Home from './Home';
import Project from './pages/Project';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Home />
      <Project />
      
      <Footer/>
    </div>
  );
}

export default App;
