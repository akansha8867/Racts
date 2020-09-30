import React from 'react';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import About from "./component/Aboutus/About";
import Project from "./component/Projects/Project";

function App() {
  return (
      <div className="App">
          <Navbar />
          <Header />
          <About />
          <Project />
      </div>
  );
}

export default App;
