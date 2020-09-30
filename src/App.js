import React from 'react';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import About from "./component/Aboutus/About";

function App() {
  return (
      <div className="App">
          <Navbar />
          <Header />
          <About />
      </div>
  );
}

export default App;
