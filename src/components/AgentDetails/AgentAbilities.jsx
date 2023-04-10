import { useState } from 'react';

const AgentAbilities = ({ abilities }) => {
  const [isAbilityDesc, setIsAbilityDesc] = useState(false);

  console.log(abilities);
  const abilitiesList = abilities.map((ability, index) => (
    <div className='ability' key={index}>
      <div className='ability-header'>
        <h4>{ability.slot}</h4>
        <h3>{ability.displayName}</h3>
        <img
          src={ability.displayIcon}
          alt={ability.displayName}
          className='ability-icon'
        />
      </div>
      <p className='ability-content'>{ability.description}</p>
    </div>
  ));
  return <div className='ability-container'>{abilitiesList}</div>;
};

export default AgentAbilities;
