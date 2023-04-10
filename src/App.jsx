import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import AgentsLayout from './layouts/AgentsLayout';
import AgentsByRole from './pages/AgentsByRole';
import AgentDetails from './pages/AgentDetails';
import Maps from './pages/Maps';
import MapDetails from './components/Maps/MapDetails';
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
            <Route path='details'>
              <Route path=':name' element={<AgentDetails />} />
            </Route>
            <Route path=':roleType' element={<AgentsByRole />} />
          </Route>
          <Route path='maps' element={<Maps />} />
          <Route path='maps/:name' element={<MapDetails />} />

          <Route path='/weapons' element={<Weapons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
