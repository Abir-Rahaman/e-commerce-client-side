import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Contact from './Componenets/Contact';
import Header from './Componenets/Shared/Header';
import Home from './Componenets/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
