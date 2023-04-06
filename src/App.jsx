import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/weapons' element={<Weapons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
