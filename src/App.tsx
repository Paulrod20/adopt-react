import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shelters from './pages/Shelters';
import Donate from './pages/Donate';
import Login from './pages/Login';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shelters' element={<Shelters/>} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
