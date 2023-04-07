import { useContext, useEffect } from 'react';
import { AgentContext } from '../contexts/AgentsContext';
import AgentsList from '../components/AgentsList';
import instance from '../axios';

const Agents = () => {
  const { agents, dispatch } = useContext(AgentContext);
  const agentsURL = 'agents';

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const response = await instance.get(agentsURL);
        const agentData = response.data.data;
        dispatch({ type: 'GET_ALL_AGENTS', payload: agentData });
      } catch (err) {
        console.log(err);
      }
    };
    getAllAgents();
  }, []);

  const agentsList = agents.map(
    (agent) =>
      agent.isPlayableCharacter && <AgentsList key={agent.uuid} {...agent} />
  );

  return <main className='agents-container'>{agentsList}</main>;
};

export default Agents;
