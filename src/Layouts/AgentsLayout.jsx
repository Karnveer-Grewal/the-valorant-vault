import { Outlet } from 'react-router-dom';
import AgentsNavBar from '../components/AgentsNavBar';
import AgentContextProvider from '../contexts/AgentsContext';

const AgentsLayout = () => {
  return (
    <AgentContextProvider>
      <main className='agents-main'>
        <AgentsNavBar />
        <Outlet />
      </main>
    </AgentContextProvider>
  );
};

export default AgentsLayout;
