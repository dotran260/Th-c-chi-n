
import Content from './Content';
import Home from './Home';
import About from './About';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div >
  );
}

export default App;
