import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AgentContext } from '../contexts/AgentsContext';
import AgentsList from '../components/Agents/AgentsList';

const AgentsByRole = () => {
  const { roleType } = useParams();
  const { agents, dispatch } = useContext(AgentContext);
  const role =
    roleType[0].toUpperCase() + roleType.slice(1, roleType.length - 1);

  const agentsByRoleArr = agents.filter((agent) => {
    if (agent.isPlayableCharacter) {
      return agent.role.displayName === role;
    }
  });

  const agentsByRole = agentsByRoleArr.map((agent) => (
    <AgentsList key={agent.uuid} {...agent} />
  ));

  return <section className='agents-container'>{agentsByRole}</section>;
};

export default AgentsByRole;
