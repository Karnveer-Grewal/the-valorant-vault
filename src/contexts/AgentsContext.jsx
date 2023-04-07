import { createContext, useReducer, useEffect } from 'react';
import { agentsReducer } from '../reducers/AgentsReducer';

export const AgentContext = createContext();

const AgentContextProvider = ({ children }) => {
  const [agents, dispatch] = useReducer(agentsReducer, [], () => {
    const localAgents = localStorage.getItem('agents');
    return JSON.parse(localAgents);
  });

  useEffect(() => {
    localStorage.setItem('agents', JSON.stringify(agents));
  }, [agents]);

  return (
    <AgentContext.Provider value={{ agents, dispatch }}>
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContextProvider;
