import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shelters from './pages/Shelters';
import Shelter from './pages/Shelter';
import Donate from './pages/Donate';
import SignIn from './pages/SignIn';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shelters' element={<Shelters/>} />
        <Route path='/shelter' element={<Shelter />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
