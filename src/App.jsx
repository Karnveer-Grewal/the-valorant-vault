import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import AgentsLayout from './Layouts/AgentsLayout';
import AgentsByRole from './pages/AgentsByRole';
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
          <Route path='agents' element={<AgentsLayout />}>
            <Route index element={<Agents />} />
            <Route path=':roleType' element={<AgentsByRole />} />
          </Route>
          <Route path='/maps' element={<Maps />} />
          <Route path='/weapons' element={<Weapons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
