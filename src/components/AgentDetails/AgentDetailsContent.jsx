import { useState } from 'react';
import AgentDescription from './AgentDescription';
import AgentAbilities from './AgentAbilities';
import AgentVoicelines from './AgentVoicelines';

const AgentDetailsNav = (props) => {
  const [isDescription, setIsDescription] = useState(true);
  const [isAbilities, setIsAbilities] = useState(false);
  const [isVoiceline, setIsVoiceline] = useState(false);

  const handleChangeContent = (contentType) => {
    if (contentType === 'description') {
      setIsAbilities(false);
      setIsVoiceline(false);
      setIsDescription(true);
    }

    if (contentType === 'abilities') {
      setIsVoiceline(false);
      setIsDescription(false);
      setIsAbilities(true);
    }
    if (contentType === 'voiceline') {
      setIsAbilities(false);
      setIsDescription(false);
      setIsVoiceline(true);
    }
  };

  return (
    <section className='agent-details'>
      <div className='agent-nav'>
        <ul>
          <li onClick={() => handleChangeContent('description')}>
            Description
          </li>
          <li onClick={() => handleChangeContent('abilities')}>Abilities</li>
          <li onClick={() => handleChangeContent('voiceline')}>Voiceline</li>
        </ul>
      </div>
      <div className='agent-content'>
        {isDescription && <AgentDescription description={props.description} />}
        {isAbilities && <AgentAbilities abilities={props.abilities} />}
        {isVoiceline && <AgentVoicelines voiceline={props.voiceline} />}
      </div>
    </section>
  );
};

export default AgentDetailsNav;
