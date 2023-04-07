import { createContext, useReducer } from 'react';
import { agentsReducer } from '../reducers/AgentsReducer';

export const AgentContext = createContext();

const AgentContextProvider = ({ children }) => {
  const [agents, dispatch] = useReducer(agentsReducer, []);
  return (
    <AgentContext.Provider value={{ agents, dispatch }}>
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContextProvider;
