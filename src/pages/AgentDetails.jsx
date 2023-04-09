import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AgentContext } from '../contexts/AgentsContext';
import AgentDetailsContent from '../components/AgentDetails/AgentDetailsContent';

const AgentDetailsLayout = () => {
  const { name } = useParams();
  const { agents } = useContext(AgentContext);
  const capitalizeName = name[0].toUpperCase() + name.slice(1, name.length);

  const currentAgentArr = agents.filter((agent) => {
    if (agent.isPlayableCharacter) {
      return agent.displayName === capitalizeName;
    }
  });

  const { fullPortrait, displayName, description, abilities, voiceLine, role } =
    currentAgentArr[0];

  return (
    <main className='agent-container'>
      <img src={fullPortrait} alt={displayName} />
      <h2>{displayName}</h2>
      <div className='agent-role'>
        <h4>
          Role Type:
          <span className='role-type'>{role.displayName}</span>
        </h4>
        <img src={role.displayIcon} alt={role.displayName} />
      </div>
      <AgentDetailsContent
        agentName={displayName}
        description={description}
        abilities={abilities}
        voiceline={voiceLine}
      />
    </main>
  );
};

export default AgentDetailsLayout;
