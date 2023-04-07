import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AgentContext } from '../contexts/AgentsContext';
import AgentsList from '../components/AgentsList';

const AgentsByRole = () => {
  const { roleType } = useParams();
  const { agents } = useContext(AgentContext);
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

  return <div>{agentsByRole}</div>;
};

export default AgentsByRole;
